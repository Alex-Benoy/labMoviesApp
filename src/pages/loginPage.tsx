import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { signIn } from "../api/login-api";
import { SignInFormData } from "../types/interfaces";
import { useUser } from "../contexts/loginContext";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();
  const [formData, setFormData] = useState<SignInFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const resp = await signIn(formData);
      console.log(resp.token);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#333" }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "text.secondary", mb: 2 }}
          >
            Please sign in to continue
          </Typography>

          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&.Mui-focused fieldset": {
                    borderColor: "#667eea",
                    boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.2)",
                  },
                },
              }}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&.Mui-focused fieldset": {
                    borderColor: "#667eea",
                    boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.2)",
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                background: "linear-gradient(to right, #667eea, #764ba2)",
                color: "white",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(102, 126, 234, 0.3)",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignInPage;
