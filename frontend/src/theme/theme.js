// This file controls ALL colors, fonts, spacing in your app

export const theme = {
  // Main brand color (appears everywhere)
  primaryColor: "indigo",
  // Options: blue, cyan, teal, green, lime, yellow, orange, red, pink, grape, violet, indigo

  // Fonts (unique look!)
    fontFamily: "JetBrains Mono, Averia, Convergence, Inter, -apple-system, sans-serif",
  headings: {
    fontFamily: "JetBrains Mono, Averia, Convergence, Inter, -apple-system, sans-serif",
    fontWeight: 700, // Bold headings
  },

  // Rounded corners everywhere
  defaultRadius: "md", // xs=2px, sm=4px, md=8px, lg=16px, xl=32px

  // Your custom brand color (optional - for unique look)
  colors: {
    myBrand: [
      "#ffffff", // lightest (index 0)
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7", // main (index 6) ← This is your primary shade
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4", // darkest (index 9)
    ],
  },

  // Set defaults for ALL buttons, cards, etc.
  components: {
    Button: {
      defaultProps: {
        radius: "md", // All buttons have medium rounded corners
      },
    },

    Card: {
      defaultProps: {
        shadow: "sm", // All cards have small shadow
        radius: "md", // Rounded corners
        withBorder: true, // Border around cards
        style: {
          background: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.1)", 
            // borderRadius: "8px",
            // padding: "16px",
            // marginBottom: "16px",
            // marginTop: "16px",
            // marginLeft: "16px",
            // marginRight: "16px",

        },
      },
    },

    Text: {
      defaultProps: {
        size: "sm", // Default text size
      },
    },
    // Input: {
    //   defaultProps: {
    //     radius: "md", // All inputs have medium rounded corners
    //     background: "transparent",
    //   },
    // },
    // DatePickerInput: {
    //   defaultProps: {
    //     radius: "md", // All date pickers have medium rounded corners
    //     background: "transparent",
    //   },
    // },
    // Select: {
    //   defaultProps: {
    //     radius: "md", // All selects have medium rounded corners
    //     background: "transparent",
    //   },
    // },
  },
};
