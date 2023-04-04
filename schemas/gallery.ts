import gallery from "./gallery";

export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: 'pictures',
            title: 'Pictures',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                },
            }]
        },
    ]

}