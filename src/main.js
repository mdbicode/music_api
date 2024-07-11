import AppExpress from '@itznotabug/appexpress';
const app = new AppExpress();
const music = import('./music');

const getRoutes = (request, response) => {
  response.json(music);
};

app.get('/',getRoutes);

export default async (context) => await app.attach(context);