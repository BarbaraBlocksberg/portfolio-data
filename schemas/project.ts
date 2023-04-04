export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'frontPicture',
            type: 'image',
            title: 'FrontPicture'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            name: 'gallery',
            type: 'reference',
            title: 'Gallery',
            to: [{ type: 'gallery' }]
        }
    ]
}