import { createTheme } from "@mui/material/styles";

const Dark = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    "&:hover": {
                        boxShadow: "none",
                    },
                    boxShadow: "none",
                },
                containedError: {
                    "&:hover": {
                        backgroundColor: "#991b1b",
                    },
                    backgroundColor: "#b91c1c",
                },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: "#238a9f",
                    },
                    backgroundColor: "#2aa2c1",
                },
                outlined: {
                    "&:hover": {
                        backgroundColor: "hsla(206, 100%, 50%, 0.04)",
                        borderColor: "#3a4a5c",
                    },
                    borderColor: "#2f3d4d",
                },
                root: {
                    borderRadius: "0.5rem", // rounded-lg from theme guide
                    fontWeight: 500,
                    padding: "0.5rem 1rem",
                    textTransform: "none",
                    transition: "all 200ms ease-in-out",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1e2b39",
                    backgroundImage: "none",
                    border: "1px solid #2f3d4d",
                    borderRadius: "0.75rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "rgba(42, 162, 193, 0.04)",
                    },
                    "&.Mui-checked": {
                        color: "#2aa2c1",
                    },
                    color: "#2f3d4d",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.65)",
                    borderRadius: "9999px", // rounded-full from theme guide
                    color: "rgba(255, 255, 255, 0.65)",
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#1e2b39",
                    backgroundImage: "none",
                    border: "1px solid #2f3d4d",
                    borderRadius: "0.75rem",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    borderBottom: "1px solid #2f3d4d",
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1e2b39",
                    backgroundImage: "none",
                    borderRadius: "0.75rem", // rounded-xl from theme guide
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: "1px solid #2f3d4d",
                    padding: "1.25rem 1.5rem",
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-root": {
                        borderBottom: "1px solid #2f3d4d",
                        color: "hsla(0, 0%, 100%, 0.51)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                    },
                    backgroundColor: "#1e2b39",
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "hsla(206, 100%, 50%, 0.04)",
                        transition: "background-color 200ms ease-in-out",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3a4a5c",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#2aa2c1",
                            borderWidth: "2px",
                        },
                        borderRadius: "0.5rem",
                    },
                },
            },
        },
    },
    custom: {
        icon: "#fff",
        loadingBar: "#2aa2c1",
    },
    palette: {
        action: {
            activatedOpacity: 0.24,
            active: "#2aa2c1",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.5,
            focus: "rgba(42, 162, 193, 0.12)",
            focusOpacity: 0.12,
            hover: "hsla(206, 100%, 50%, 0.04)",
            hoverOpacity: 0.08,
            selected: "rgba(42, 162, 193, 0.16)",
            selectedOpacity: 0.16,
        },
        background: {
            default: "#081727", // Deep navy from theme guide
            paper: "#1e2b39", // Surface color (01dp)
        },
        contrastThreshold: 3,
        divider: "#2f3d4d", // Border/divider color from theme guide
        error: {
            contrastText: "#ffffff",
            dark: "#991b1b", // Error hover from theme guide
            light: "#ff6b6b",
            main: "#dc3545", // Error/danger from theme guide
        },
        grey: {
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#3a4a5c", // Border hover from theme guide
            "50": "#fafafa",
            "500": "#2f3d4d", // Border color from theme guide
            "600": "#2f3d4d",
            "700": "#1e2b39", // Surface color
            "800": "#081727", // Background color
            "900": "#081727",
            A100: "#d5d5d5",
            A200: "#aaaaaa",
            A400: "#2f3d4d",
            A700: "#1e2b39",
        },
        info: {
            contrastText: "#ffffff",
            dark: "#238a9f", // Primary hover from theme guide
            light: "#64b5f6",
            main: "#2aa2c1", // Primary accent from theme guide
        },
        mode: "dark",
        primary: {
            contrastText: "#ffffff",
            dark: "#238a9f", // Primary hover
            light: "#64b5f6",
            main: "#2aa2c1", // Primary accent cyan from theme guide
        },
        secondary: {
            contrastText: "#ffffff",
            dark: "#2f3d4d",
            light: "#3a4a5c",
            main: "#2f3d4d", // Border color for secondary actions
        },
        success: {
            contrastText: "#ffffff",
            dark: "#30a46c", // Success/active from theme guide
            light: "#81c784",
            main: "#30a46c",
        },
        text: {
            disabled: "rgba(255, 255, 255, 0.5)",
            primary: "hsla(0, 0%, 100%, 0.74)", // Primary text from theme guide
            secondary: "hsla(0, 0%, 100%, 0.51)", // Secondary text from theme guide
        },
        tonalOffset: 0.2,
        warning: {
            contrastText: "rgba(0, 0, 0, 0.87)",
            dark: "#f57c00",
            light: "#ffb74d",
            main: "#ff9800",
        },
    },
    typography: {
        body1: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
        },
        caption: {
            color: "hsla(0, 0%, 100%, 0.51)",
            fontSize: "0.75rem",
        },
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        h1: {
            color: "#ffffff",
            fontSize: "2.25rem",
            fontWeight: 700,
        },
        h2: {
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: 700,
        },
        h3: {
            color: "#ffffff",
            fontSize: "1.125rem",
            fontWeight: 600,
        },
    },
});

export default Dark;
