

export function login(req, res) {
    // Logic for user login
    const { email, password } = req.body;

    // Validate user credentials
    if (email === "user@example.com" && password === "password") {
       return res.json({ message: "Login successful" });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
}