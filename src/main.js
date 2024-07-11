import AppExpress from '@itznotabug/appexpress';

const app = new AppExpress();

const list = [
    { name: 'Drunktext' },
    { name: 'Dandelions' },
    { name: 'Love Yourself' }
];

const fetchMusicList = async () => {
    return { list };
};

const getRoutes = async (request, response) => {
  const music = await fetchMusicList();
  response.json(music.list);
};

app.get('/', getRoutes);

export default async (context) => await app.attach(context);
