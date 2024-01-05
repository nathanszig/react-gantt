# Gantt React Component

## Overview

This React component provides a Gantt chart visualization for project timelines. 
It is designed to be easy to integrate into your React applications,
allowing you to display and manage project timelines efficiently.

## Installation

### NPM

You can install the Gantt React Component using NPM.
Ensure you have Node.js installed.

```bash
npm install free-react-gantt
```

## Docker

There aren't many dependencies on this project, but we've docked it for those who want to.

Command to build the image
```bash
docker-compose build
docker-compose up -d
```

Access the container:
```bash
docker-compose exec free-gantt-react /bin/bash
```

## Usage
To use the Gantt React Component in your project, 
import it and pass the required data as props and the optional customize props.

```jsx
import Gantt from 'free-react-gantt';
import React from 'react';

const YourApp = () => {
  return (
    <div>
      <h1>Your Application</h1>
      <Gantt data={yourData} customize={yourCustomizeJson} />
    </div>
  );
}

export default YourApp;
```

### Data Structure

The component expects data in the following structure:

```json
{
    "users": [
        {
            "id": {"type": "number"},
            "firstName": {"type": "string"},
            "lastName": {"type": "string"},
            "tasks": [
                {
                    "id": {"type": "string"},
                    "project": {
                        "name": {"type": "string"},
                        "id": {"type": "number"}
                    },
                    "name": {"type": "string"},
                    "start": {"type": "string"},
                    "end": {"type": "string"},
                    "description": {"type": "string"}
                }
            ]
        }
    ]
}
```
It also expected an optional props "customize" to allow the customization of 
few specifics elements of the gantt.

The component expects customize in the following structure:

```json
{
    "todayButton": {
        "background": {"type": "string"},
        "color": {"type": "string"},
        "border": {"type": "string"},
        "border-radius": {"type": "string"}
    },
    "daysContainer": {
        "background": {"type": "string"},
        "color": {"type": "string"},
        "border": {"type": "string"},
        "border-radius": {"type": "string"}
    },
    "weeksContainer": {
        "background": {"type": "string"},
        "color": {"type": "string"},
        "border": {"type": "string"},
        "border-radius": {"type": "string"}
    }
}
```

## Demo

Check out our [online documentation site](https://site.test) for a live demo and 
additional information.

## Configuration Options

The primary configuration option is the `data` prop, 
where you pass the necessary projects, tasks and users information to the Gantt component.

## Issues
### Know Issues

1. **Date Display Between Projects**: Currently, the dates between two projects are displayed. This will be addressed in a future release.

### Report Issues

- [All issues](https://github.com/nathanszig/react-gantt/issues/)
- [New issues](https://github.com/nathanszig/react-gantt/issues/new)

## The Future

1. **TeamView Feature**: A future update will include a TeamView feature to watch only personal projects.
2. **Picture Feature**: A future update will include the possibility of usin picture for users and projects

## Contributions

This Gantt React Component is maintained by Benjamin Burstein and Nathan Szigeti 
for an open source project at IIM.
We welcome contributions! Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Details

- **Node.js Version**: This project requires Node.js version 18 or higher.

- **React and ReactDOM**: The component is built using React and ReactDOM versions specified in the `package.json`.

- **Date Manipulation**: Date manipulations are handled using the `moment` library.

- **Build Tool**: The project uses `react-scripts` version 5.0.1 for development and building.

- **Style Preprocessing**: Styling is done using SASS version 1.69.4.

Please ensure your environment meets these tool version requirements when using the Gantt React Component. 
Feel free to reach out if you have any further questions or need more details!
