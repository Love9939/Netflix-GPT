# Netflix GPT

- Create React App Uisng VITE.
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Custom Hook for Movies Trailer
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Container 
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- useTopRatedMovies Custom hook
- useUpcomingMovies Custom hook
- GPT Search Bar
- GPT Search Page
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- showed Moive trailer on clicking on movie card
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive-





# Features

Authentication & User Management

Sign Up & Sign In: Users can create an account and log in using Firebase Authentication.

Profile Management: Users can update their profile details, including display names and profile pictures.

Sign Out: Secure sign-out functionality.

Authentication Protection: Users are redirected to the login page if they attempt to access the browse page without authentication, and vice versa.

Movie Browsing Experience

Main Movie Trailer: Displays the featured movie trailer in the background with auto-play and mute.

Dynamic Movie Lists: Fetches and displays different categories of movies (Now Playing, Popular, Top Rated, Upcoming) using TMDB API.

Movie Details & Trailers: Clicking on a movie card fetches and displays its trailer.

Optimized UI: Beautiful UI using Tailwind CSS to enhance the browsing experience.

CDN Optimization: TMDB image CDN is used for optimized movie poster loading.

Netflix-GPT: AI-Powered Movie Recommendations

GPT Search Bar: Users can input text to receive intelligent movie suggestions based on OpenAI’s GPT API.

GPT-Powered Recommendations: Suggestions fetched from TMDB based on the AI-generated movie list.

Reusability: The existing Movie List component is used to display AI-generated recommendations.

Performance Enhancements

Memoization: Performance optimizations using React’s useMemo and useCallback.

Efficient API Calls: Custom hooks handle fetching and managing API data efficiently.

Redux Store: Centralized state management with slices for user authentication, movie lists, and GPT suggestions.

Unsubscribing to Auth Listener: Prevents memory leaks by unsubscribing from Firebase authentication listener on unmount.

Project Setup & Configurations

Environment Variables: Sensitive data like API keys are stored in .env files and ignored in Git.

Routing: Implemented React Router for seamless navigation.

Constants File: Hardcoded values are maintained in a constants file for easy updates.

Tech Stack

Frontend: React.js (Vite), Tailwind CSS

State Management: Redux Toolkit

Authentication: Firebase Auth

APIs: TMDB API, OpenAI GPT API

Routing: React Router

How to Run the Project

Clone the repository:

Install dependencies:

Set up environment variables:

Create a .env file and add API keys (Firebase, TMDB, OpenAI) following the .env.example template.

Start the development server:

Future Enhancements

Implementing user watchlists.

Enhancing AI-generated recommendations with more filters.

Improving accessibility and animations.

Netflix-GPT combines movie browsing with AI-powered recommendations to create an engaging and intelligent streaming experience!
