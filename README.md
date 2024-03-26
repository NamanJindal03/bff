### Setup
`npm install`
`npm start`

### About 
In this demo I have tried to show the BFF(Backend for Frontend) architecture pattern. The complete data for the same is present in the frontend itself in the form of JSON. 

So the flow of data is in the 
1) Public Folder > Data > JSONs
2) Src > api > (extract the JSONs)
3) src > bff_layers > (solely handle the JSONs and filter content which is not needed)

### Major Tech and Libraries used
- React and React Hooks
- React Router Dom
- Context API

