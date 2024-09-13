---
title: Image Classification Live App (Muffins vs Chihuahuas)
type: Project
publishedAt: 2024-09-09
summary: Classifying images of muffins vs Chihuahuas
code: https://github.com/rashmi-carol-dsouza/muffin-vs-chihuahua.git
tags: machine learning, django, computer vision, terraform, docker, azure app service, azure container registry
---

<iframe class="video" src="https://www.youtube.com/embed/nwG6bzR3vxk?si=M5PDlD7gHTA11ai5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Try It Out

**I invite you to try out the Muffin vs Chihuahua app. Check out the live app and explore the code behind it to learn more about how it was built.**

**Live App**: [<u>Muffin vs Chihuahua</u>](https://muffinvschihuahua.azurewebsites.net/)

As someone passionate about combining web development and machine learning, I recently embarked on a project to build a Django-based web application that classifies images. The goal was to create an app where users could upload images and receive instant classification results, powered by a TensorFlow model. To take things a step further, I also focused on containerizing the application with Docker and deploying it to Azure using Terraform for cloud infrastructure automation. This project gave me a deeper understanding of how to seamlessly integrate machine learning, web development, and cloud deployment.

Inspiration and Concept:
The idea for this project stemmed from the growing importance of image classification in fields like e-commerce, healthcare, and social media. Inspired by fun examples like the "Chihuahua vs. Muffin" meme, I wanted to create a simple, intuitive app that could classify images of chihuahuas and muffins. The vision was simple: allow users to upload an image and get a real-time classification of whether it’s a chihuahua or a muffin.

Building the Model:
To get started, I trained a convolutional neural network (CNN) using TensorFlow and Keras. The model was built using a dataset of chihuahuas and muffins, and I pre-processed the images to resize and normalize them for optimal performance. After training the model to distinguish between these two classes, I saved it for deployment in the Django app.

Creating the Web App with Django:
With the TensorFlow model ready, I built a web interface using Django. Django’s powerful framework allowed me to easily manage the image upload functionality and render classification results. Users can upload an image of either a chihuahua or a muffin, and the app processes the image to return the classification.

To make the deployment more streamlined, I containerized the entire application using Docker. This ensured that the TensorFlow, Keras, and other dependencies would run consistently across any environment.

Key Features of the App

Image Uploading: Users can upload images through a user-friendly interface, with drag-and-drop functionality or file browsing.
Real-Time Classification: Once an image is uploaded, the app quickly processes it using the TensorFlow model and returns whether it’s a chihuahua or a muffin.
Docker Containerization: Docker made the app portable and easy to deploy across different environments with minimal configuration.

Automating Deployment with Terraform on Azure:
To take this project to the next level, I decided to deploy the app on Microsoft Azure using Terraform. Terraform is a powerful tool for defining and provisioning cloud infrastructure. It allowed me to automate the creation of all the necessary Azure resources such as virtual machines, storage, and networking in a repeatable and scalable way.

Azure Deployment Steps:
Infrastructure as Code with Terraform: Using Terraform, I defined the infrastructure required for the Django app, including the creation of a resource group, virtual network, and storage account.
Azure Virtual Machines: I deployed the Django app inside a Docker container on an Azure Virtual Machine, ensuring that the machine is provisioned with the right specs to run the application smoothly.
Azure Storage for Static Files: Terraform also automated the setup of an Azure Storage account to handle static files such as images uploaded by users.
Security and Access Control: I used Terraform to configure security features such as access policies, ensuring the application could interact securely with the Azure resources.
By leveraging Terraform, I avoided manual configuration, ensuring that the deployment was not only quick but also scalable and easy to replicate across different environments.

Challenges and Solutions:
During the project, I encountered challenges like configuring access policies and ensuring the TensorFlow model would run efficiently in the cloud without GPU support. Docker helped streamline the deployment by managing dependencies, and Terraform automated the otherwise complex process of setting up Azure infrastructure.

Lessons Learned and Future Plans:
This project helped me deepen my knowledge of cloud deployments, infrastructure automation, and machine learning in a production environment. Using Terraform on Azure allowed for scalable, efficient deployment, and Docker ensured that the application would run consistently across environments.

In the future, I plan to further optimize the app by introducing autoscaling and enhancing the classification model for better performance. Additionally, I’m exploring how to integrate CI/CD pipelines to automate updates and deployments even further.

Conclusion:
Combining Django, TensorFlow, Docker, and Terraform for Azure deployment provided a comprehensive learning experience. This project highlights the power of integrating machine learning models with web applications and cloud infrastructure, and it opened new doors for future explorations in AI-powered applications.

Happy coding, classifying, and deploying!