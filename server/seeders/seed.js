const db = require('../config/connection');
const { User, Announcement } = require('../models');
const userSeeds = require('./userSeeds.json');
const announcementSeeds = require('./announcementSeeds.json');

db.once('open', async () => {
  try {
    await Announcement.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < announcementSeeds.length; i++) {
      const { _id, announcementAuthor } = await Announcement.create(announcementSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: announcementAuthor },
        {
          $addToSet: {
            announcements: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});