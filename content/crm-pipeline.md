---
title: CRM ETL Pipeline
type: Project
publishedAt: 2024-12-15
summary: Building a Containerized Data Pipeline for Freshsales CRM with Docker, Flyway, and Make
code: https://github.com/rashmi-carol-dsouza/crm-etl-pipeline
tags: data pipeline, workflow automation,etl, freshworks api,docker, python, postgres, flyway, makefile
---

**Introduction**  
Recently, I undertook a data engineering project to build an end-to-end ETL pipeline for Freshsales CRM data. Similar to how I approached creating a pipeline for analyzing large public datasets in Apache Beam, my goal here was to create a scalable, maintainable solution—this time focusing on CRM data extraction, transformation, and loading (ETL) into a relational database.

This project leveraged containers (Docker), automated database migrations (Flyway), and a Makefile-driven workflow to orchestrate and simplify the entire ETL process. Below, I’ll walk you through the core concepts, challenges, and how I tackled them to streamline CRM data management.

**Inspiration and Concept**

*Why Build a CRM ETL Pipeline?*  
Working with CRM data can quickly become complex. Contacts, accounts, and deals each come with unique fields and relationships that change over time. Inspired by my previous experiences using Apache Beam and Terraform to handle large-scale data pipelines, I sought to bring a similar level of automation and organization to the CRM world.

*Reliability & Reproducibility*:  
 Docker ensures that the environment in which the pipeline runs is consistent, no matter where it’s deployed.

*Scalability & Maintenance*:  
 Instead of manually provisioning or configuring environments, using Docker Compose and Flyway allows easy updates without downtime.

*Automation & Efficiency*:  
 The Makefile approach eliminates repetitive tasks, enabling rapid iteration and redeployment during development.

**Building the CRM ETL Pipeline**

<u>Data Extraction</u>

The project begins by extracting data from Freshsales CRM via its API. Three primary datasets drive this pipeline:

*Contacts  
*Accounts  
*Deals  

Each dataset is fetched using Python scripts (extract_data.py, main.py), configured with environment variables for credentials and API endpoints. By decoupling the extraction logic from any transformation, I ensure raw data integrity and maintain a clear separation of concerns.

<u>Data Transformation</u>  

All transformation logic lives in transform.py. This phase includes:

*Data Cleaning*:   
Standardizing data types (e.g., converting date strings to datetime), removing duplicates, and filtering out incomplete records.  
*Mapping & Normalization*:   
Ensuring each field in the CRM maps correctly to the relational database schema. This involves normalizing nested JSON structures and aligning them to tables (e.g., contacts, accounts, deals).  
*Aggregations & KPIs*:  
Summarizing or deriving metrics such as total deal amount per account or number of open deals.  

<u> Data Loading</u>  

Finally, the cleaned and transformed data is loaded into a PostgreSQL database:

*Relational Schema*:  
 Tables for contacts, accounts, deals, and a join table companies manage relationships between entities (e.g., an account can have multiple contacts, a contact may be linked to several deals).

*Flyway Migrations*: 
 Before any load operation, Flyway automates the creation or updating of the schema. That ensures each environment is consistently versioned.

**Automating Infrastructure and Workflow**  

*Containerization with Docker*  

Docker Compose orchestrates:

1.A Python container running the ETL scripts.  
2.A PostgreSQL container for the database.  
3.A Flyway container to apply migrations automatically on startup.  

This setup mirrors the approach of using Terraform and Apache Beam on Google Cloud, but instead focuses on local or on-premises environments for a CRM use case. By declaring everything in docker-compose.yml, the pipeline is portable and can be quickly redeployed.

**Makefile for Simplified Commands**  
A Makefile underpins the entire development workflow. Key commands include:

*make setup – Installs dependencies and sets up the environment.  
*make install – Creates a virtual environment and installs Python packages with Poetry.  
*make up – Brings up the containers in detached mode.  
*make rebuild – Rebuilds images and re-runs the pipeline end-to-end.  
*make down – Stops and removes containers.   
Using Make provides a frictionless experience, reducing the overhead of remembering container commands and versioning details.

**Challenges and Learnings**  

*CRM Schema Complexity*  
Similar to large public datasets (like the London bicycle data in Apache Beam), CRM data can be highly relational and constantly changing. Proper schema design and ongoing versioning via Flyway was essential to avoid data loss or mismatched fields.

*API Rate Limits*  
Unlike batch public datasets, CRM APIs often impose rate limits. Scheduling the pipeline during off-peak hours or batching requests carefully can mitigate rate-limit issues.

*Container Resource Constraints*  
Docker abstracts environment differences, but resource allocation (memory, CPU) can become a bottleneck if the data volume grows. Monitoring logs and adjusting container resources is crucial.

*Data Quality and Validation*  
Since CRM records can be manually entered, ensuring data validation at each stage—extraction, transformation, loading—helped catch inconsistencies early.

**Conclusion**


This CRM ETL Pipeline project showcases how containerization, automation, and well-structured code can streamline complex data workflows, much like how Apache Beam and Google Cloud Dataflow handle large-scale data processing. By leveraging Docker, Makefiles, and Flyway, I created a repeatable process for extracting Freshsales CRM data, transforming it for analytics, and loading it into a relational database.

**Key Takeaways**  

Automation is crucial for reducing human error and saving development time.
Containerization ensures the pipeline runs consistently across environments.
Schema Management with Flyway makes evolving the CRM data model straightforward and transparent.
With this foundation in place, the pipeline can be extended to handle incremental loads, integrate with business intelligence tools, or be deployed to a full cloud environment. If you’re looking to wrangle and analyze your CRM data more efficiently, I hope this project offers a helpful template.

Happy coding and data crunching!