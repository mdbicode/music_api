import AppExpress from '@itznotabug/appexpress';

const app = new AppExpress();

// Simulated list of music
const list = [
    { name: 'Drunktext' },
    { name: 'Dandelions' },
    { name: 'Love Yourself' }
];

// Async function to fetch music list
const fetchMusicList = async () => {
    return { list };
};

// Define routes handler
const getRoutes = async (request, response) => {
    try {
        const music = await fetchMusicList();
        response.json(music.list);
    } catch (error) {
        console.error('Error fetching music:', error);
        response.status(500).json({ error: 'Failed to fetch music' });
    }
};

// Define endpoint
app.get('/', getRoutes);

// Export the application
export default async (context) => {
    await app.attach(context);
};
