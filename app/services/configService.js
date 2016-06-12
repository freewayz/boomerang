angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG JSIIT',
        'id'            : '107415840199830484575',
        'googleApi'     : 'AIzaSyCX3_3O6VIxK0trONGletFcrq7j5sdhGQY',
        'pwaId'         : '106009422492829297252', //Remove this and replace with the main GDG jsitt own
        'domain'        : 'http://www.gdgspacecoast.org',
        'twitter'       : 'gdgjsiit',
        'facebook'      : 'Google-Developers-Group-JSIIT-1506244079672735',
        'youtube'       : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
