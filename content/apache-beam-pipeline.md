---
title: Apache Beam Pipeline
type: Project
publishedAt: 2024-06-25
summary: Data Engineering Pipeline for London Bicycles with Apache Beam and Terraform
code: https://github.com/rashmi-carol-dsouza/gcp_dataflow_apache-beam_pipeline.git
tags: apache beam, google cloud dataflow, google cloud storage, terraform, google bigQuery
---

Recently, I embarked on a data engineering project that involved creating a data pipeline to process and analyze public datasets on London bicycles. This project was part of a coding test where I had to work with real-world data from two tables: one containing cycling trip data and the other with information about cycling stations. The goal was to derive insights, such as the number of rides between station pairs and the total distance traveled, using Apache Beam on Google Cloud Dataflow.

Inspiration and Concept:
This project was an excellent opportunity to dive deeper into data engineering using modern tools like Apache Beam for scalable data processing. The London bicycles dataset was intriguing because it offered rich insights into cycling behavior in a major city. I wanted to create a solution that would not only meet the challenge requirements but could also be scalable, maintainable, and easily deployable to the cloud.

Building the Data Pipeline with Apache Beam:
The core of the project revolved around building a pipeline using Apache Beam. Apache Beam allows for writing data processing pipelines that work seamlessly across different execution engines. In this case, I used Google Cloud Dataflow as the execution engine to process the dataset.

Here’s how I approached it:

Data Extraction: I pulled the cycling hire trip data and station data from Google BigQuery. This step involved creating simple SELECT queries to fetch the data without transformations, as the challenge required all transformations to be handled in the pipeline.

Data Transformation: 

Easy Task: I calculated the number of rides between every possible pair of start and end stations. This involved grouping the data by station pairs and counting the number of trips.
Hard Task: I calculated the total distance covered between each pair of stations, using their latitude and longitude from the station dataset. I used the geopy library to calculate the distance based on the Haversine formula, which simplifies the distance as a straight line between two points on the Earth’s surface.
Data Output: The results were written to Google Cloud Storage in text files, formatted as requested, such as "start_station_id, stop_station_id, amount_of_rides, total_distance_between_stations".

Automating Infrastructure with Terraform
To make the project more scalable and automate the cloud infrastructure, I used Terraform to set up the Google Cloud Platform (GCP) environment. Terraform allowed me to automate the creation of resources like the Dataflow job and Google Cloud Storage bucket.

Key steps in using Terraform:

Dataflow Pipeline Setup: I used Terraform to enable the Dataflow API, provision the necessary compute resources, and configure the pipeline execution parameters.
Storage: Terraform automatically set up the Google Cloud Storage bucket where the output files would be stored, ensuring a clean and organized project structure.
Using Terraform not only made the infrastructure setup repeatable but also ensured that I could quickly iterate and redeploy changes during development.

Challenges and Learnings
This project presented several interesting challenges:

Learning Apache Beam: Apache Beam is a powerful but complex tool for distributed data processing, and building transformations for such large datasets required careful management of memory and computational resources.
GCP Integration: Managing permissions and resources in GCP was simplified by Terraform, but ensuring the right API permissions were enabled for Dataflow, BigQuery, and Cloud Storage was key to a smooth deployment.

Conclusion
Building this data pipeline for analyzing London bicycle trips was a fantastic learning experience. Using Apache Beam and Google Cloud Dataflow allowed me to handle large datasets with ease, while Terraform automated the infrastructure deployment, making the project scalable and efficient. This experience not only sharpened my skills in data engineering but also demonstrated the importance of cloud tools in handling big data workflows.

This project is a stepping stone toward building more complex, real-time data engineering solutions, and I’m excited to continue exploring the possibilities.

Happy coding and data crunching!