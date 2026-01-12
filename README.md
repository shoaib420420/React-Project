# React Hotel Website

A modern, responsive hotel website built with React and Vite. This application provides a user-friendly interface for exploring hotel services, rooms, galleries, and news. You can check project in video through this link: https://drive.google.com/file/d/11OcACRX0JsVfNllPyDZrzIKvyqCdZ18H/view?usp=sharing

## 🚀 Features

- **Multi-Page Navigation**: Seamless routing using `react-router-dom`.
- **Pages**:
  - **Home**: Landing page with hero section and highlights.
  - **About**: Information about the hotel and its history.
  - **Contacts**: Contact information and location.
  - **Hotel**: Details about hotel amenities and rooms.
  - **Gallery**: Visual showcase of the hotel premises.
  - **News**: Latest updates and articles.
- **Responsive Design**: Styled with Bootstrap 5 and custom CSS for optimal viewing on all devices.
- **Iconography**: Integrated with FontAwesome and Bootstrap Icons.

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: 
  - [Bootstrap 5](https://getbootstrap.com/)
  - Custom CSS
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Icons**: 
  - [FontAwesome](https://fontawesome.com/)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - React Icons
- **Sliders**: `react-simple-image-slider`, `react-slideshow-image`

## 📂 Project Structure

```
first-practice/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Page components (Home, About, etc.)
│   ├── images/          # Image assets
│   ├── App.jsx          # Main application component with routes
│   ├── main.jsx         # Entry point
│   └── ...
├── package.json         # Project dependencies and scripts
└── ...
```

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd first-practice
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🏃 Usage

-   **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will typically be available at `http://localhost:5173`.

-   **Build for production:**
    ```bash
    npm run build
    ```

-   **Preview production build:**
    ```bash
    npm run preview
    ```

-   **Run linter:**
    ```bash
    npm run lint
    ```
