https://blogs-webpages.vercel.app/


Blog Website

This project is a blog website built using React that fetches data from an external APIand displays it on various pages. It also includes a theme-switching feature,allowing users to switch between light and dark modes for an improved reading experience.

Getting Started

To run the project locally,follow these steps:

1. Clone the repository to your local machine.
2. Install project dependencies using npm install or yarn install.
3. Start the development server with npm start or yarn start.
4. Explore the blog website and enjoy the theme-switching feature.
5. Technologies Used

React: For building the user interface and managing state.
1. Tailwind CSS: For styling and responsive design.
2. Axios: For making APIrequests.
3. use-local-storage: For managing theme preferences.
4. Project Structure

index.js

1. The index.js file is the entry point of the application.
2. It initializes the React app,sets up the root element,and renders the main App component wrapped in a context provider.
   
App.js

1. The App.js file is the core of the application,orchestrating key functionalities.
2. It leverages React hooks and the context APIto efficiently manage and share data across components.
3. Main features include:
4. Fetching and displaying blog posts.
5. Implementing pagination for navigating through blog pages.
6. Applying theme changes,allowing users to toggle between light and dark modes.
7. The useEffect hook ensures that blog posts are fetched and theme settings are applied after the component is rendered.
   
index.css

1. The index.css file contains the project's styling,utilizing the Tailwind CSS framework.
2. Custom properties (CSS variables) are defined for light and dark mode,allowing for easy theming customization.
3. Different styles for light and dark modes are specified based on the chosen theme.
   
Blog Website Components

This project comprises several React components that together create a blog website. Each component has a specific role in rendering and managing different aspects of the website.

Component Descriptions BlogDetails.jsx

1. The BlogDetails component is responsible for rendering detailed information about a blog post.
2. It displays the post's title,author,category,date,content,and tags.
3. Clickable links are provided for navigation to related categories and tags.
   
Darkmode.js

1. The Darkmode component is responsible for rendering and managing the dark mode and light mode theme toggle button.
2. It utilizes the useContext hook to access the theme and theme-switching function from the context.
3. The button allows users to switch between dark and light themes,and the icon changes accordingly.
   
Header.js

1. The Header component represents the website's header section.
2. It displays the website's title and includes the Darkmode component for theme toggling.
3. The header also applies styling and shadow effects based on the selected theme.
   
Pagenation.js

1. The Pagenation component handles pagination controls for navigating between blog pages.
2. It retrieves data from the context,including the current page number and total page count.
3. Users can click "Previous"and "Next"buttons to navigate between pages,and the component updates accordingly.
   
Posts.js

1. The Posts component is responsible for rendering blog posts.
2. It utilizes context data to display either a loading spinner or a list of blog posts.
3. The component also handles edge cases,such as when no posts are found or when posts contain tags.
   
ScrollToTop.jsx

1. ScrollToTop is a utility component that automatically scrolls the window to the top when the URLpath changes.
2. It enhances navigation by ensuring users start at the top of the page when accessing different content.
   
Spinner.jsx

1. The Spinner component renders a loading spinner to improve the user experience during data loading.
2. It creates a visual indicator of loading progress and provides feedback to users.
   
Blog Page Application

This project is a blog page application built using React and React Router. It allows users to browse and view blog posts organized by categories and tags. The application also provides features like dark mode,pagination,and navigation between related blog posts.

Pages Home

1. The Home page displays a list of all blog posts.
2. Users can navigate through different pages of blog posts using pagination.
3. The page supports dark mode for improved user experience.
   
Category Page

1. The Category Page displays blog posts related to a specific category.
2. Users can navigate back to the previous page or explore more posts in the same category.
3. Dark mode is available for better readability.
   
Tag Page

1. The Tag Page displays blog posts associated with a particular tag.
2. Users can easily go back to the previous page or explore other posts with the same tag.
3. The dark mode feature enhances the reading experience.
   
Blog Page

1. The Blog Page allows users to view a single blog post in detail.
2. Users can also see related blog posts.
3. Navigation back to the previous page is supported,and dark mode enhances the appearance.
   
Context Management

1. The application utilizes React Context to manage and share data across components.
2. The context stores information such as loading status,current page number,total page count,and blog posts.
3. Dark mode functionality is also integrated,allowing users to switch between light and dark themes.
   
Component Interaction

1. These components interact with the central application context (AppContext) to access and manage data,such as theme preferences,blog posts,and pagination.
2. The components use hooks like useContext and useState to ensure responsive and dynamic user interactions.
   
Styling

1. Styling is achieved using Tailwind CSS classes and custom CSS properties.
2. The components adapt their appearance based on the selected theme,providing a cohesive user experience.
   
Dependencies

1. React: For building the user interface.
2. React Icons: For displaying theme toggle icons.
3. Tailwind CSS: For styling and responsive design.
4. use-local-storage: For managing theme preferences.
   
AppContext.js

In this project,the AppContext.js file serves as the cornerstone for managing and distributing data across various components. It adheres to the React Context API,establishing a central hub for storing and sharing critical information throughout the application's lifecycle.

Context Creation Steps

Step 1: Creating the Context

The initial step involves the creation of a context using createContext from React. This context acts as a container,housing the data intended for dissemination among components.

Step 2: Providing Data to Children

The AppContextProvider function operates as a wrapper enveloping the entire application. It facilitates the dissemination of data to all child components,streamlining access and updates to essential state variables. These variables encompass:

1. loading: Aboolean flag indicating whether data retrieval is currently in progress.
2. pageNumber: Tracks the current page number of the blog posts being displayed.
3. toatalPageNumber: Stores the total number of available pages.
4. posts: An array designed to hold retrieved blog posts.
5. theme: Responsible for managing the application's theme,spanning both light and dark modes.
   
Step 3: Sending Data for Consumption

The final step involves the creation of a value object. This object amalgamates all pertinent data and functions that necessitate sharing with child components. The AppContext.Provider component encapsulates the entire application,granting access to the value object for all subscribing child components.

Key Data and Functions

Data Variables

1. loading: Aboolean variable that signals whether data is actively being fetched.
2. pageNumber: Keeps a record of the current page number for blog posts.
3. toatalPageNumber: Stores the total count of available pages.
4. posts: An array that houses the fetched blog posts.
5. theme: Governs the application's theme,including both light and dark modes.
   
Functions

1. fetchBlogPosts(pageNumber): Afunction tasked with initiating APIcalls to retrieve blog posts based on the provided page number.
2. handlePageChange(pageNumber): Manages page navigation by updating the pageNumber and triggering fresh data retrieval.
3. switchTheme(): Facilitates toggling between light and dark theme modes within the application.
   
Theme Handling

The context also boasts an embedded theme management mechanism,affording users the flexibility to switch between light and dark modes. The default theme is determined by user system preferences,but it can be customized and persisted using local storage.

Usage

To access the data and functions made available by the context,child components can effortlessly import and utilize the useContext hook in conjunction with AppContext.

Dependencies

The context leverages the use-local-storage package to proficiently manage and persist user theme preferences.

Contribution

Contributions to this project are welcome!If you'd like to contribute,please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.
