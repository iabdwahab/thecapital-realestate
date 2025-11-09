// image-to-img.js

/**
 * jscodeshift script to convert Next.js <Image> component to standard <img> tag.
 *
 * NOTE: This script handles common cases but may require manual review
 * for complex prop usage (e.g., custom style/className logic).
 */
module.exports = function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 1. Remove the 'next/image' import
  root
    .find(j.ImportDeclaration, {
      source: {
        value: "next/image",
      },
    })
    .remove();

  // 2. Define Next.js Image-specific props to remove
  const propsToRemove = [
    "layout",
    "loader",
    "quality",
    "priority",
    "placeholder",
    "onLoadingComplete",
    "fill",
    "sizes",
    "objectFit",
    "objectPosition",
  ];

  // 3. Find and transform the <Image> component tags
  root
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: "Image",
        },
      },
    })
    .forEach((path) => {
      const openingElement = path.value.openingElement;

      // a. Rename the component tag from <Image> to <img>
      openingElement.name.name = "img";
      if (path.value.closingElement) {
        path.value.closingElement.name.name = "img";
      }

      // b. Clean up/Remove Next.js specific props
      openingElement.attributes = openingElement.attributes.filter((attr) => {
        // Skip anything that isn't a JSXAttribute (e.g., spread attributes)
        if (attr.type !== "JSXAttribute") {
          return true;
        }

        // Remove known Next.js props
        if (propsToRemove.includes(attr.name.name)) {
          return false;
        }

        // Handle fill prop replacement logic (complex and best done manually,
        // but removing it is safer than guessing)
        return true;
      });

      // c. Convert fill={true} related styles (Simplified approach: if fill was used,
      //    add basic 100% width/height which is often what fill implied)
      //    NOTE: This is a highly simplified assumption and may need CSS cleanup.

      // Look for the `fill` prop that was just removed and see if we need to add a style
      // This is complicated to do cleanly *after* removing the prop.
      // For robustness, stick to the cleanup and leave layout/style fixes to manual CSS adjustment.
    });

  return root.toSource();
};

// Use this in the terminal to run the script:
// jscodeshift -t replaceImagewithimg.js ./components --parser=tsx
