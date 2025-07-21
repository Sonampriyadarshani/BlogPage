const axios = require("axios");

exports.generateBlog = async (req, res) => {
  const { topic } = req.body;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/text-bison-001:generateText?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(
      url,
      {
        prompt: {
          text: `Write a professional blog about: ${topic}`
        }
      }
    );

    const content = response.data.candidates?.[0]?.output || "";
    res.status(200).json({ content });
  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Gemini API call failed" });
  }
};
