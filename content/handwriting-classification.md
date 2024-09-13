---
title: Handwriting Classification Live App
type: Project
publishedAt: 2023-09-10
summary: Classifying images of handwritting digits
code: https://github.com/rashmi-carol-dsouza/handwritten-digit-recognition
tags: machine learning, handwritten digit recognition, streamlit, deep learning, computer vision, deployment
---

<iframe class="video" src="https://www.youtube.com/embed/Ckh20TGn61E?si=iO4MvEGOAiNggwdZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Try It Out

**I invite you to try out the Handwritten Digit Classification app and see how well it can recognize your handwritten digits. Check out the live app and explore the code behind it to learn more about how it was built.**

**Live App**: [<u>Handwritten Digit Classification App</u>](https://handwritten-digit-recognition.streamlit.app/)

Building a Handwritten Digit Classification App with Streamlit
As a big fan of leveraging machine learning for practical applications, I recently embarked on a project to create a web app that classifies handwritten digits. Inspired by the capabilities of modern AI, I wanted to build an intuitive tool that anyone could use to recognize handwritten numbers effortlessly. Here’s how I brought this idea to life using Streamlit and a custom machine learning model.

Inspiration and Concept
The inspiration for this project came from the widespread use of digit recognition in various technologies, such as postal services and banking. I envisioned an app where users could simply upload an image of a handwritten digit and instantly receive a prediction of what the digit is, along with the confidence level of the prediction.

Building the Model
To start, I utilized the well-known MNIST dataset, which contains thousands of images of handwritten digits. This dataset is a staple for training models in digit recognition. Using TensorFlow and Keras, I preprocessed the images, standardized them, and then trained a convolutional neural network (CNN) model. This model was optimized to accurately classify the digits 0 through 9.

Creating the Web App with Streamlit
Once the model was trained and tested, I moved on to creating the web application using Streamlit. Streamlit is a powerful yet simple framework that allows developers to turn data scripts into shareable web apps quickly. With Streamlit, I was able to build an interactive interface where users could upload images, and the app would process these images and display the model’s predictions.

Key Features of the App
User-Friendly Interface: The app features an easy-to-use interface where users can drag and drop their images or use a file uploader to select the digit image.
Real-Time Predictions: Once an image is uploaded, the app immediately processes it and displays the predicted digit along with the confidence score.
Interactive Feedback: Users receive instant visual feedback, with the app displaying the uploaded image and the prediction side by side.

Outcome and Learnings
Deploying the model using Streamlit was a seamless experience. The app not only performs well but also provides an excellent platform for demonstrating the practical applications of machine learning in everyday tasks. Through this project, I learned a lot about model deployment and creating interactive user interfaces for machine learning models.

By documenting this journey, I hope to inspire others to explore the fascinating world of machine learning and its practical applications. Whether you're a seasoned data scientist or a curious beginner, there's always something new to learn and create.

This project was a fantastic opportunity to delve into the intersection of machine learning and web development, and I look forward to continuing to improve the model and the app's capabilities.

Happy handwriting detection!