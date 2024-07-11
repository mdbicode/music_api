import AppExpress from '@itznotabug/appexpress';

const app = new AppExpress();

const list = [
    { name: 'Drunktext', artist :'Henry Moodie' },
    { name: 'Dandelions', artist :'Ruth B' },
    { name: 'Love Yourself', artist :'Justin Bieber' }
];

const fetchMusicList = async () => {
    return { list };
};

const getRoutes = async (request, response) => {
  const music = await fetchMusicList();
  return response.json(music.list);
  
};

app.get('/', getRoutes);

export default async (context) => await app.attach(context);
