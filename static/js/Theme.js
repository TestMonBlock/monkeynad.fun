import {
    createTheme,
    ThemeProvider
} from "@mui/material/styles";
import "@fontsource/roboto"; // ✅ Import Roboto font

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFD700", // ✅ Gold for primary buttons
        },
        secondary: {
            main: "#E74C3C", // ✅ Red for secondary buttons
        },
        text: {
            primary: "#17215E",
        },
        link: {
            main: "#FFD700",
        },
        flip: {
            main: "green",
        },
        background: {
            default: "#6A6E09", // ✅ Green Background
            paper: "#6A6E09", // ✅ Match background for cards
        },
    },
    typography: {
        fontFamily: '"Roboto", sans-serif', // ✅ Now using Roboto everywhere
        body1: {
            fontSize: 18,
            fontWeight: 400, // ✅ Normal weight for all text
            textTransform: "none",
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
            textTransform: "none",
        },
        allVariants: {
            color: "#000000",
            fontWeight: 400,
            textTransform: "none",
        },
        h4: {
            fontWeight: 600,
            fontSize: 32,
        },
        h5: {
            fontSize: 24,
            fontWeight: 500,
        },
        h6: {
            fontSize: 22,
            fontWeight: 400,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "6px 6px 20px 6px #00000096",
                    borderRadius: 20,
                    backgroundColor: "#6A6E09", // ✅ Green background
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "12px 24px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    fontWeight: "bold", // ✅ Buttons stay bold
                    fontSize: "1rem",
                    fontFamily: '"Roboto", sans-serif', // ✅ Buttons match Roboto now
                    textTransform: "uppercase",
                    padding: "10px 16px",
                    minWidth: 120,
                    transition: "all 0.3s ease-in-out", // ✅ Smooth transition
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)", // ✅ Drop shadow by default
                    "&:hover": {
                        boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.6)", // ✅ Stronger shadow on hover
                        transform: "translateY(-2px)", // ✅ Slight lift effect
                    },
                    "&:active": {
                        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // ✅ Smaller shadow on click
                        transform: "translateY(1px)", // ✅ Button pressed effect
                    },
                },
                containedPrimary: {
                    backgroundColor: "#FFD700", // ✅ Gold buttons
                    color: "#000000",
                    "&:hover": {
                        backgroundColor: "#E6C200", // ✅ Darker gold on hover
                    },
                },
                containedSecondary: {
                    backgroundColor: "#E74C3C", // ✅ Red button for "Sell Bananas"
                    color: "#FFFFFF",
                    "&:hover": {
                        backgroundColor: "#C0392B", // ✅ Darker red on hover
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    textTransform: "none",
                },
            },
        },
    },
});

export default function Theme({
    children
}) {
    return <ThemeProvider theme = {
        theme
    } > {
        children
    } < /ThemeProvider>;
}