# React Data Fetching

In this sprint you'll be using data from a third party API. Your task is to create a React-based interface to present this data in an interactive and engaging way. What you display and how you display it is entirely up to you, but your app must allow users to interact with your data visualisation in some way.

For example if you were displaying a heatmap for earthquake data, the user might choose to show only data for a certain location, and then they may choose to show only events between January and May 2018. The interface would alter the data visualisation to match what the user had chosen.

Note:
If you cd into the root directory of this repo you can run

```bash
npx create-react-app .
```

to place your new project in here.

## Choose your API

The first step is to decide on which API you will use for this project. We have provided a shortlist of api's that you might find useful but you are not limited to these.

- [Dummy API](https://dummyapi.io/) - Make your own social media site with fake users, posts and images.
- [The Cat API](https://thecatapi.com/) - Cats as a service
- [Giphy API](https://developers.giphy.com/) - Search and upload gifs
- [DnD 5th Edition](http://www.dnd5eapi.co/) - The classic rpg
- [Magic the Gathering](https://magicthegathering.io/) - The popular card game
- [PokeApi](https://pokeapi.co/) - Gotta catch em all
- [TvMaze](https://www.tvmaze.com/api) - Information about TV shows
- [Carbon Intensity](https://api.carbonintensity.org.uk/) - The official Carbon Intensity API developed by the National Grid
- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/fdsnws/event/1/) - Earthquakes and stuff
- [BikeWise](https://www.bikewise.org/documentation/api_v2) - Bike crashes, hazards and thefts
- [Open Weather Map](https://openweathermap.org/api) - Current and forecast weather across the globe
- [TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) - Events
- [Google books](https://developers.google.com/books/docs/overview) - Information on Books
- [NASA](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) - Meteorite landings

If none of these spark your interest then there is a more comprehensive list in this [repo](https://github.com/public-apis/public-apis)

_nb_ Some of these api's require authentication. Make sure you use one that is publicly available to keep your application simple enough for this sprint.

Feel free to do your own research and if you come across something else you'd like to try feel free =]

Once you have chosen your API you should spend a little time planning.

- [ ] Draw out your interface
- [ ] Choose which pieces of the interface can be separated into components
- [ ] Draw out the tree structure for your components
- [ ] Design your state so you keep it to a minimum. Don't repeat yourself!
- [ ] Decide which pieces of state each component will need and get a rough idea of where this state will sit on your tree
- [ ] Ensure state is high enough it can be shared by necessary components, but as low as possible to avoid passing it unnecessarily.

## Visualise the data

How you display your data is up to you and there a lot of ways of displaying the data your api serves up.

For example, if you were displaying a heat-map for earthquake data, the user might choose to show only data for a certain location, and then they may choose to show only events between January and May. The interface would alter the map to match what the user had chosen.

In order to build more complicated UI's we can take advantage of pre-built 3rd party components. We have provided a selection of libraries that can be used to present your data.

- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) A chart library. They have some lovely [demos](https://reactchartjs.github.io/react-chartjs-2/#/) with links to examples.
- [react-google-charts](https://www.npmjs.com/package/react-google-charts) A more complex chart library with a wider range of options.
- [nivo-rocks](https://nivo.rocks/components) A React chart library built by a co-creator of [State of JS](https://stateofjs.com/)
- [Mapbox](https://www.mapbox.com/) A professional maps service with a free tier to try out most features. Comes with a [React SDK](https://github.com/alex3165/react-mapbox-gl) for easy integration. (You may need to add `--force` to your npm install if the react versions conflict .)
- [React leaflet](https://react-leaflet.js.org/) A free library for rendering leaflet maps in React. There's a nice tutorial demoing it [here](https://www.youtube.com/watch?v=290VgjkLong) as well as a [getting started guide](https://react-leaflet.js.org/docs/start-installation) to get you up and running.

  - **nb** React Leaflet v3 is incompatible with React v18. At the time of writing you'll need to install v4 which is still in beta. Use this install command `npm i react-leaflet@4.0.0-beta.0`

- [React Bootstrap](https://react-bootstrap.github.io/) React components based on the popular Bootstrap CSS framework.
- [MUI (formerly known as Material UI)](https://mui.com/core/) React components that use Google's Material design.

Don't feel confined to these suggestions. There are several other public api's / visualisation libraries out there for you to use. Spend a bit of time planning your app and researching what information is available in your api's.
