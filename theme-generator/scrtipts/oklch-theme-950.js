import fs from "fs";

import Color from "colorjs.io";
import { spectrum, theme } from "./oklch-theme-data-950.js";

const getBlanks = (mode) => mode === "Dark" ? " ".repeat(8) : " ".repeat(4);

const updateFile = (filePath, bufferContent, mode) => {
  // Read the existing file content
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Define the markers
  const startMarkerRegExp = `/\\* ${mode}-BEGIN \\*/`;
  const endMarkerRegExp = `/\\* ${mode}-END \\*/`;
  const startMarker = `/* ${mode}-BEGIN */`;
  const endMarker = `/* ${mode}-END */`;

  // Use a regular expression to replace the content between the markers
  const updatedContent = fileContent.replace(
    new RegExp(`${startMarkerRegExp}.*?${endMarkerRegExp}`, "s"), // Match between markers
    `${startMarker}\n${bufferContent}\n${getBlanks(mode)}${endMarker}`, // Replace it with buffer content
  );

  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, "utf-8");

  console.log(`File updated successfully for ${mode}`);
};

const validLightnessRange = (chroma, hue) => {
  const step = 0.001; // Step for lightness increment
  let min = null, max = null;

  // Test lightness from 0 to 1 in small increments
  for (let l = 0; l <= 1; l += step) {
    const color = new Color(`oklch(${l} ${chroma} ${hue})`);
    /*
     * A color is always valid in the space where it was defined.
     * You need to check if the color is within a specific display gamut,
     * like sRGB, which has limited capabilities compared to OKLCH.
     */
    const valid = color.inGamut("srgb");
    if (valid) {
      if (min === null) {
        // First valid lightness value
        min = l;
      }
      max = l; // Update as long as valid
    }
  }

  return { min, max };
};

const addLightness = (tone, color) => {
  const lightness = parseFloat(tone) / 1_000;
  color["lightness"] = lightness;
};

["Light", "Dark"].forEach(mode => {
  const stringBuffer = [];
  Object.entries(theme).forEach((value) => {
    const [name, color] = value;
    console.log("name, color", name, color);
    spectrum.forEach(((tone, index) => {
      console.log("tone, color", tone, color);
      addLightness(tone, color);
      const { lightness, chroma, hue } = color;
      let realLightness = 0.0;
      switch (mode) {
        case "Light": realLightness = parseFloat(lightness); break;
        case "Dark": realLightness = 1 - parseFloat(lightness); break;
      }
      console.log("lightness, realLightness:", lightness, realLightness);
      let oklchColor = new Color(`oklch(${realLightness} ${chroma} ${hue})`);

      // Convert to sRGB and get the HEX value
      const srgbColor = oklchColor.toGamut("srgb", { method: "lch.chroma" });

      // Convert back to OKLCH
      oklchColor = srgbColor.to("oklch");

      stringBuffer.push(`${getBlanks(mode)}--color-${name}-${tone}: ${oklchColor};`); // Modern
    }));
  });
  const filePath = '../src/App.css';
  updateFile(filePath, stringBuffer.join(`\n`), mode);
});
