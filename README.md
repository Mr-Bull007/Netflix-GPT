...
# Netflix GPT

- Create React App using vite
    - npm create vite@latest netflix-gpt -- --template react
- Conifgured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Create SignUp User Account
- Implement SignIn User API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- Bug Fix: Sign up displayName in the Header
- Bug Fix: If the user is not logged in, redirect /browse to login page and vice versa.
- Unsubscribed to the onAuthStateChanged callback when Header component unmounts.
- Hardcoded URL values added to the utils/constants folder.
- Registered for TMDB API and got access Token
- Get data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies data
- Planning for Main container and secondary container
- Fetch data for trailer video
- Update Store with trailer video data
- Embedded the YT video and make it autoplay
- Added Tailwind CSS 
- Built Secondary Component
- Build Movie List component
- Build Movie Card component
- TMDB Image CDN URL
- Used TailwindCSS to make the browse page look good!
- Did npm install -D tailwind-scrollbar-hide and added required configurations inside tailwind.config.js
- GPT Search Page
- GPT Search Bar
- Made the GPT Search Page multilingual

# Features
- Login/Sign up (Before Authentication)
    .Sign in/Sign up form
    .Redirect to Browse Page
- Browse Page (After Authentication)
    .Header
    .Main Movie
        .Trailer in Background
        .Title & Description
        .Movie Suggestions
            .MovieLists * N
- Netflix GPT
    .Search Bar
    .Movie Suggestions


