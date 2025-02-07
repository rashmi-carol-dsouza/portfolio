---
title: here & now – Your Voice-Enabled Local Discovery Assistant
type: Project
publishedAt: 2025-01-15
summary: A chatbot API built with FastAPI that provides contextual responses, TTS audio output, and local data integration
code: https://github.com/rashmi-carol-dsouza/tech-berlin-ai-hackathon
tags: fastapi, chatbot,rag pipeline, tts, langchain, docker, api-development, poetry, make
---
<iframe width="1047" height="452" src="https://www.youtube.com/embed/nfWqx4y36Oc" title="here &amp; now" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Experience the FastAPI Chat API! The API delivers audio responses while retrieving real-time local information based on GPS coordinates. Explore the code to see how it was built!**

**Inspiration and Concept**

As chatbots continue to evolve, I wanted to create one that can dynamically combine local data with text-to-speech (TTS) capabilities. Whether providing real-time weather updates, Wikipedia summaries, or nearby places, the API's goal is to offer users contextual answers. Built for a tech AI hackathon, here & now is a voice-enabled local discovery app that helps users explore nearby events, places, and activities through interactive chat. Inspired by digital assistants like Alexa and Google Assistant, I focused on creating a fast, scalable backend while my teammate built the front-end interface.

The main requirements were:  
**Contextual Responses:** Provide semantically relevant answers using **LangChain** and **FAISS** for efficient text search.  
**Local Data Integration:** Fetch data from APIs like OpenWeatherMap, Wikipedia, and Google Maps.  
**Audio Output:** Generate and stream TTS responses with **LMNT** for hands-free interaction.   


**Building the API**

The backend was developed using **FastAPI**, known for its high performance and built-in asynchronous capabilities. The API integrates multiple services to provide rich and dynamic responses.


**Data Retrieval and Local Information**  

The API gathers data from:
- **Wikipedia:** For summaries of nearby locations.
- **OpenWeatherMap:** To fetch current weather conditions.
- **Google Places:** To discover points of interest based on latitude and longitude.

These data sources are combined to enhance chatbot responses with contextual local details, enabling personalized conversations.


**Text-to-Speech (TTS) Integration**  

For audio output, the API uses the **LMNT TTS** service to convert chat responses into MP3 files. The MP3s are streamed directly to the client, making the chatbot accessible to users who prefer audio over text.

**Key Features**

- **Local Info API:** Fetches weather, Wikipedia articles, and nearby places based on user-provided coordinates.
- **Chat API with TTS:** Processes user queries and returns audio responses.
- **Asynchronous Requests:** Handles multiple API calls efficiently for faster response times.

**Project Setup and Execution**

To simplify development and deployment, I containerized the backend using **Docker** and automated key workflows using a **Makefile**. Dependency management is handled with **Poetry**, and environment variables store API keys for secure configuration.

**Challenges and Solutions**

1. **Asynchronous API Coordination:**  
   Fetching data from multiple sources asynchronously required efficient handling to minimize delays. FastAPI’s async capabilities enabled smooth parallel requests.

2. **Audio Streaming:**  
   Ensuring that MP3 responses were streamed without noticeable latency was a challenge. I optimized FastAPI’s response streaming to deliver fast, reliable audio playback.

3. **Rate Limits:**  
   External APIs impose rate limits, which led me to implement basic caching and throttling to reduce the number of repeated API calls.

**Lessons Learned and Future Improvements**

This project was a deep dive into **real-time data integration** and **API development**. It strengthened my understanding of combining multiple services in a scalable backend architecture. Moving forward, I plan to:  
*Implement **autoscaling** with Kubernetes for high-traffic scenarios.  
*Introduce **CI/CD pipelines** to automate deployments.  
*Enhance caching strategies to optimize API response times.  

**Conclusion**

This **FastAPI Chat API** demonstrates the power of integrating multiple services to deliver context-rich responses. By combining **LangChain**, **TTS**, and **local data sources**, I built an extensible chatbot backend capable of providing audio responses. Collaborating with my teammates on the front-end further highlighted the importance of creating seamless, user-friendly interfaces for API-based services.

I hope this project inspires others to explore building APIs with real-time data capabilities!

**Happy coding and API building!** 😊