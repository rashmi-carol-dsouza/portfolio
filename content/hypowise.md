---
title: hypowise.de Live App
type: Project
publishedAt: 2024-05-09
summary: Mortage Interest Calculator
code: https://github.com/Haus-Octopus/hypowise-api
tags: aws lambda, terraform, apis
---
<iframe class="video" src="https://www.youtube.com/embed/x7sqGdhA-mI?si=rDnvPrV3lMs0gOkx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Try It Out

**I invite you to try out the hypowise.de. Check out the live app and explore the code behind it to learn more about how it was built.**

**Live App**: [<u>hypowise.de</u>](http://hypowise.de/)

As a fan of building practical tools that help make financial planning more accessible, I recently collaborated on a project to develop a mortgage breakdown web application called Hypowise API. The idea was to create an interactive tool that allows users to visualize the impact of various mortgage parameters on their payments over time. Together with my team mate, who worked on the front-end, we aimed to build an intuitive app that helps users understand the capital and interest paid per year, the total cost, and the balance after the term period.

Inspiration and Concept:
The inspiration for Hypowise API came from the complexity of mortgage calculations that people face when trying to understand long-term financial commitments. Mortgages are significant investments, and having a tool that provides clear breakdowns of how payments change over time—based on interest rates, principal, and loan term—can empower users to make informed decisions. We wanted to build an app that would not only give users control over these parameters but also provide a clear visualization of how changes affect their mortgage payments and long-term balance.

Building the Back-End API:
For the back-end, I developed the Hypowise API, which processes the calculations for mortgage payments. It uses a series of Lambda functions to handle calculations, read data, and store user input in DynamoDB. The core functionality allows users to input various parameters like interest rates, loan amount, and mortgage term, and instantly receive feedback on how these changes impact their yearly payments and balance.

Key back-end components

Calculate-Lambda: This function performs the mortgage breakdown calculations based on user inputs and returns the results in real-time.
Save-Lambda-DynamoDB: This handles storing the user data and calculations securely in AWS DynamoDB, allowing for future enhancements like saving user scenarios.
Read-Lambda: This retrieves data and calculations from the database for display in the app.

Front-End Development:
The front-end of the application, developed in collaboration with my team mate, focuses on providing a user-friendly interface where users can input their mortgage details. With simple sliders and input fields, users can tweak parameters like the loan amount, interest rate, and term, and immediately see how those changes affect both the capital and interest payments.

Key Features of the App
Interactive Parameters: Users can change mortgage parameters (such as interest rate, loan amount, and term) and immediately see how these adjustments affect the payment schedule.
Yearly Breakdown: The app displays a year-by-year breakdown of how much is paid towards interest versus principal.
End-of-Term Balance: Users can view the remaining balance after the mortgage term if they choose a shorter repayment period or make extra payments.
Pending Functionality

Challenges and Learnings:
While building Hypowise API, one of the biggest challenges was ensuring the calculations were precise and efficient, especially when handling various edge cases like additional payments and fluctuating interest rates. Developing the back-end with AWS Lambda and DynamoDB allowed us to create a scalable, cloud-based solution without worrying about infrastructure management.

Though the app is already functional, some features are still under development. We plan to add more functionality.

Conclusion
Developing the Hypowise API has been a fulfilling project, merging financial insight with web development to create a tool that simplifies mortgage planning. With further improvements, this app has the potential to become a valuable resource for anyone looking to understand their mortgage better and make informed decisions about their financial future.

Stay tuned for updates as we continue refining the app!