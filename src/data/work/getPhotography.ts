import { getFile } from '@/data/work/helpers';
import { Work, WorkType } from '@/types';
import { Icons } from '@/types';
import { getRandomColor } from '@sil/color';

export  const getPhotography = async () => {
    const { collections } = await getFile('https://cdn.sil.mt/photography/index.json');
    if (!collections) return;

    const dataPromises = collections.map(async (collection: any) => {
        const collectionData = await getFile(collection.data);
        return {
            ...collection,
            data: collectionData
        }
    });
    const data = await Promise.all(dataPromises);

    return data.map((collection: any) => {
        return {
            title: collection.title,
            summary: collection.summary || "",
            description: collection.description || "",
            image: collection.image || "",
            type: WorkType.PHOTOGRAPHY,
            icon: Icons.CAMERA,
            tags: collection.tags || [],
            link: collection.link || '',
            color: collection.color || getRandomColor(),
            data: collection.data || null
        } as Work
    });
}