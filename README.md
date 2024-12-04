# Doron CMS

This repository contains the CMS (Content Management System) for the [Doron Law Website](https://doron-hadad.vercel.app/). Built with **Sanity CMS**, this project allows seamless content management for the Doron Law frontend.

## Features

- **Flexible Content Management**: Easily manage pages, blog posts, and other content types.
- **Sanity Studio**: Integrated with Sanity Studio for a user-friendly content editing experience.
- **Real-time Updates**: Instant synchronization of content with the frontend hosted on Vercel.

## Project Structure

- `/schemas`: Contains the schema definitions for the content types.
- `/static`: Holds static assets like images and icons for the CMS.
- `/config`: Configuration for Sanity Studio and other project-specific settings.

## Prerequisites

Ensure you have the following installed before setting up:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Sanity CLI](https://www.sanity.io/docs/cli)

## Setup

1. Clone the repository:

   git clone https://github.com/your-username/doron-cms.git  
   cd doron-cms  

2. Install dependencies:

   npm install  

3. Configure Sanity:

   Update the `.env` file with your Sanity project ID and dataset. If the `.env` file does not exist, create one:

   SANITY_PROJECT_ID=your_project_id  
   SANITY_DATASET=production  

4. Start the development server:

   npm run dev  

   The Sanity Studio should now be accessible at http://localhost:3333.

## Deployment

This project is deployed to **Sanity.io**. To deploy updates to the CMS:

1. Build the project:

   npm run build  

2. Deploy the Studio to Sanity:

   sanity deploy  

3. Follow the on-screen instructions to update the CMS.

## Frontend Integration

This CMS powers the frontend for the Doron Law Website, located in the [doron-frontend repository](https://github.com/your-username/doron-frontend). Ensure that both the frontend and CMS share the same Sanity project configuration for seamless integration.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- **Live Website**: [https://doron-hadad.vercel.app/](https://doron-hadad.vercel.app/)
- **Frontend Repo**: [doron-frontend](https://github.com/your-username/doron-frontend)
- **Sanity.io**: [Sanity.io Official Website](https://www.sanity.io/)

---
Made with ❤️ for Doron Hadad
