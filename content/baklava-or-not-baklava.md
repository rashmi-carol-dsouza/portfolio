---
title: Baklava or Not Baklava
type: Project
publishedAt: 2022-09-03
summary: Identifying Baklava with Machine Learning - A Food Image Classification Project
code: https://github.com/rashmi-carol-dsouza/baklava-or-not-baklava
outcome: https://rashmidsouza.hashnode.dev/baklava-or-not-baklava
tags: machine learning, food image classification, image recognition, Flask, deep learning, computer vision
---
<iframe class="video" src="https://www.youtube.com/embed/bzI9C5xOyG0" title="Baklava or Not Baklava" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

As a big fan of Turkish pastry Baklava, I often found it difficult to identify the different types of Baklava available in stores. So, I decided to create an app that can help users identify Baklava by taking a picture of it.

To build this app, I partnered with someone who had more expertise in building web apps. However, we soon realized that building a model that can identify different types of Baklava was more complicated than we anticipated. Therefore, we decided to build an app that can classify images into two categories: "Baklava" and "Not Baklava", inspired by Jian Yang's app from the TV show Silicon Valley.

To create the model, I used a dataset of Baklava images from images.cv and the Food101 dataset. To train the model to identify images that do not contain Baklava, I included a dataset of "Not Baklava" images randomly selected from the Food101 dataset. I balanced the datasets by using the same number of images in both categories.

I used Keras and Tensorflow to process the data and build the model. First, I resized the images to a standard size, converted them into a Numpy array, and standardized them to be between 0 and 1. Then, I used a Sequential Model and Stochastic Gradient Descent (SGD) optimizer with a learning rate of 0.001 to build the model.

To evaluate the model's accuracy, I used images from the validation dataset. I found that the ratio between the validation and training datasets may not have been proportionate, which could have skewed the model's performance. I also realized that using image augmentation to increase the dataset could improve the model's performance, given the small size of the dataset and the variability of images received from user's cameras.

Finally, I deployed the model using a Flask server, so every incoming image is processed to fit the model's requirements and then fed to the model which will then provide an output indicating if the image contains Baklava or not. Overall, I learned a lot from this project, and I'm excited to continue working on improving the model's efficiency in the future.

