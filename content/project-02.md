---
title: Robot Dream
type: Project
publishedAt: 2023-01-19
summary: Web App to detect balloons and happy faces in images
---
<iframe width="566" height="304" src="https://www.youtube.com/embed/R5XeVGh6ZoI" title="Robot Dream Web App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In this project, our team "Robot Dream" implemented an object detection system that can detect and classify balloons and happy faces in an image. The project involved the use of deep learning techniques such as convolutional neural networks (CNNs) and object detection to extract features from the image and a region-based algorithm to identify and locate the objects within the image.

\
The first phase of the project involved data collection and labeling. The team created a data collection and labeling policy and put together approximately 1900 images. The end output of this phase included a scope refinement of the project and a risk assessment.

\
In the second phase, the team developed models to detect happy faces and balloons in images. We also finalized the evaluation metrics for our models and developed a human baseline. We tried using Yolo, Detr, and Detectron 2, but in the end, we could only run Yolo and Detr. For face detection, we used a pre-built library called Pillow to detect faces in images and classify the faces using Convolutional Neural Networks.

\
In the final phase, we corrected some errors with duplicates in their dataset and retrained their models. We finally built a locally working Web Application where users could upload images, get results on the number of balloons and if the faces in the images are happy, and save the results of the models. We also researched future steps for the application.

\
As a member of the team, I was responsible for crating the data policy, training a YOLO V5 model and developing the web app using Flask. This project gave me an opportunity to work on an object detection project for the first time.

\
[Here's the Project Code](https://github.com/rashmi-carol-dsouza/balloon-detection)