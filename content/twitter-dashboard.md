---
title: Twitter Dashboard
type: Project
publishedAt: 2023-01-19
summary: End to end automated pipeline to visualize customer feedback for Thameslink UK
code: https://github.com/rashmi-carol-dsouza/twitter-dashboard
outcome: https://github.com/rashmi-carol-dsouza/twitter-dashboard/blob/main/Tweet%20Dashboard%20Report.pdf
tags: visualisation, nlp, Azure Functions, Power bi, azure sql, sentiment analysis
---
<iframe class="video" src="https://www.youtube.com/embed/mLhlzSaivr0" title="Realtime Twitter Dashboard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The project focused on designing and implementing a fully automated end-to-end data pipeline for **Thameslink UK** to monitor and analyze customer-reported feedback regarding railway service failures and delays. The primary objective was to provide actionable insights into customer sentiment and identify key areas for service enhancement. By leveraging cloud technologies, the pipeline streamlined the process of ingesting, processing, and visualizing large volumes of real-time feedback data, ultimately enabling better data-driven decisions to improve service reliability.

To capture feedback efficiently, we integrated **Azure Serverless Functions** to ingest data from various sources, primarily **Twitter**, where customers frequently report their experiences. The ingestion pipeline was scheduled to run at regular intervals, ensuring that the feedback data remained up to date. The pipeline also incorporated **sentiment analysis models** that classified and extracted key insights from the feedback. These models were designed to detect common issues, such as delays or poor service experiences, and to analyze the overall customer sentiment for each report.

Once the sentiment analysis was complete, the results were stored in an **Azure Serverless SQL database**, enabling efficient and scalable data storage. The processed data was then fed into **Power BI**, where we developed interactive dashboards to visualize the feedback and highlight critical trends. These dashboards provided key stakeholders with an intuitive view of customer sentiment and helped identify patterns, such as frequently mentioned stations, common service issues, and fluctuations in feedback over time.

As a core member of the team, I was responsible for developing the end-to-end data pipeline. This included configuring **Azure Serverless Functions** to automate data ingestion, implementing the sentiment analysis models for data processing, and setting up the **Azure Serverless SQL database** for storage. Additionally, I collaborated closely with the team to design and build **Power BI** dashboards that provided stakeholders with actionable insights in a clear, easy-to-use format.

This project marked a significant milestone in my career as it was the first time I designed and deployed a complete data pipeline to the cloud. I gained valuable hands-on experience with cloud infrastructure, serverless computing, data processing, and visualization tools. It deepened my understanding of scalable data solutions and demonstrated the impact of cloud-native technologies on automating real-time data workflows. This project not only honed my technical skills but also underscored the importance of combining data engineering and analytics to drive continuous service improvements.