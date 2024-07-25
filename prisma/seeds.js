import prisma from "./db.ts";

async function seed() {
  console.log(`Beginning initial seeds...`);

  console.log(`Creating users data.`);

  const usersData = [
    {
      // “me” / LePapier
      signInEmailAddress: "l@l.me",
      hashedPassword:
        "$2a$12$7IgXH7ORHd4x5O7.VC5LROJJFMq620II9ESleuMIYs.6KNDAsEYAe", // LePapier
      username: "LePapier",
      pseudoname: "“me”",
      // First name and last name criteria
      firstNameAnswer: "Luther",
      lastNameAnswer: "Tchofo Safo",
    },
    {
      // Alice / Alice-chan
      signInEmailAddress: "a@a.com",
      hashedPassword:
        "$2a$12$uePHXFQIZxmEqAyvU74txewChLSQsnYt6zvf0m2ad7pnO0ORvRwh.", // Alice-chan
      username: "Alice-chan",
      pseudoname: "Alice",
      // First name and last name criteria
      firstNameAnswer: "Alice",
      lastNameAnswer: "Perrini",
    },
    {
      // Bianca / Trovounette
      signInEmailAddress: "b@b.com",
      hashedPassword:
        "$2a$12$LxyeiZiFQ2t2m7rODda9B.O171J3GPuva77qfCLCSAUhZ60EWTFwW", // Trovounette
      username: "Trovounette",
      pseudoname: "Bianca",
      // First name and last name criteria
      firstNameAnswer: "Bianca",
      lastNameAnswer: "Trovò",
    },
    {
      // Candice / Candi
      signInEmailAddress: "c@c.com",
      hashedPassword:
        "$2a$12$dCJyvJBRaz8bpgLHRrHW2etVFXD0s51/r8tkdkZwXT8zXeBxT.Kb2", // Candi
      username: "Candi",
      pseudoname: "Candice",
      // First name and last name criteria
      firstNameAnswer: "Candice",
      lastNameAnswer: "Namubiru",
    },
    {
      // Danny / D-Dan
      signInEmailAddress: "d@d.com",
      hashedPassword:
        "$2a$12$iUu18mSH7lUoZc7g6g3sjuTVwy72Vyvc/kpTB9b0FERZA0ETepGP6", // D-Dan
      username: "D-Dan",
      pseudoname: "Danny",
      // First name and last name criteria
      firstNameAnswer: "Daniel",
      lastNameAnswer: "Craig",
    },
    {
      // Elijah / El-Hadj
      signInEmailAddress: "e@e.com",
      hashedPassword:
        "$2a$12$3AYWQwwEm70zwEpnP4AIyu49TEyNgvv1eMQvz0c.PgxmDZryZz67.", // El-Hadj
      username: "El-Hadj",
      pseudoname: "Elijah",
      // First name and last name criteria
      firstNameAnswer: "Elijah",
      lastNameAnswer: "Portgas",
    },
    {
      // Fiona / FioTriangle
      signInEmailAddress: "f@f.com",
      hashedPassword:
        "$2a$12$iwnzkb.lDDFRIHHBGMmOEONw00W/GIwX7OD8JxNhMciuLvk/rALbW", // FioTriangle
      username: "FioTriangle",
      pseudoname: "Fiona",
      // First name and last name criteria // N/A
    },
    {
      // Grace / Gracie-babie
      signInEmailAddress: "g@g.com",
      hashedPassword:
        "$2a$12$6yHob1L9kfrWTYM3B6pL1u67CnHI/AKMaxtfv28Ydk5VzxDeuhCUq", // Gracie-babie
      username: "Gracie-babie",
      pseudoname: "Grace",
      // First name and last name criteria // N/A
    },
    // {
    //   // Hector / Hectavus
    //   signInEmailAddress: "h@h.com",
    //   // hashedPassword: // Hectavus
    //   username: "Hectavus",
    //   pseudoname: "Hector"
    // },
    {
      // Lucas / Lucario
      signInEmailAddress: "l@l.com",
      hashedPassword:
        "$2a$12$oOJFmvblCEREkIlI/UcYIO8mOFF0OewEmYNXyB8MHlU.ZKU3dWuRC", // Lucario
      username: "Lucario",
      pseudoname: "Lucas",
      // First name and last name criteria
      firstNameAnswer: "Lucas",
      lastNameAnswer: "Earthbound",
    },
    {
      // Malcolm / MisterX
      signInEmailAddress: "m@m.com",
      hashedPassword:
        "$2a$12$wL5QmeFlP4ZErJ4w3nwN..feiXznhw4HDApZrI7he/zEyGY7Njg8G", // MisterX
      username: "MisterX",
      pseudoname: "Malcolm",
      // First name and last name criteria
      firstNameAnswer: "Malcolm",
      lastNameAnswer: "Little",
    },
    {
      // Nancy / Nonyes
      signInEmailAddress: "n@n.com",
      hashedPassword:
        "$2a$12$XrYHAPv0JJx9kHD75uOpqeuiopl1HLuMuGoXQJa8EzslhmgMw7Ntu", // Nonyes
      username: "Nonyes",
      pseudoname: "Nancy",
      // First name and last name criteria
      firstNameAnswer: "Nancy",
      lastNameAnswer: "Commodore",
    },
    {
      // Ophelia / Ophelia-swan
      signInEmailAddress: "o@o.com",
      hashedPassword:
        "$2a$12$nvpZFeUg3qgtbVonnbcWNOxsXxHqj643v7gBQs0OWo/VobRYAsP/G", // Ophelia-swan
      username: "Ophelia-swan",
      pseudoname: "Ophelia",
      // First name and last name criteria
      firstNameAnswer: "Ophelia",
      lastNameAnswer: "Rainbow",
    },
    {
      // Pamela / Pimpampoum
      signInEmailAddress: "p@p.com",
      hashedPassword:
        "$2a$12$/aojscO6dz4Oypig/dx1NuJ2DNYZn3RW5BfQVAzYwYyftmmkS6VUW", // Pimpampoum
      username: "Pimpampoum",
      pseudoname: "Pamela",
      // First name and last name criteria
      firstNameAnswer: "Pamela",
      lastNameAnswer: "Nargacuga",
    },
    {
      // Quentin / WhoDidThatToYou
      signInEmailAddress: "q@q.com",
      hashedPassword:
        "$2a$12$GUVQktRR33Pxm9lxVAhmbu9SC.dInMR2h3Q7oNL3zYOngDaB7tOEe", // WhoDidThatToYou
      username: "WhoDidThatToYou",
      pseudoname: "Quentin",
      // First name and last name criteria
      firstNameAnswer: "Quentin",
      lastNameAnswer: "Tartarino",
    },
    {
      // Roland / RG
      signInEmailAddress: "r@r.com",
      hashedPassword:
        "$2a$12$upWLe7nfwK8mxnCJccSpEuhuq7Zgcl6zP0iOopC3vgyLDW1LH9dkO", // RG
      username: "RG",
      pseudoname: "Roland",
      // First name and last name criteria
      firstNameAnswer: "Roland",
      lastNameAnswer: "Gerric",
    },
    {
      // Soren / TruePrince
      signInEmailAddress: "s@s.com",
      hashedPassword:
        "$2a$12$G2A1bB4nKn66WVC9lkQWP.9qh2//xod6vQbTZNisyPB39YyuSTQiO", // TruePrince
      username: "TruePrince",
      pseudoname: "Soren",
      // First name and last name criteria
      firstNameAnswer: "Soren",
      lastNameAnswer: "Daein",
    },
    {
      // Titus / TheTitan
      signInEmailAddress: "t@t.com",
      hashedPassword:
        "$2a$12$OcHGmHR.zYmGo08sC80ZZuyP9KntjOHVG6RnrFKXnw2HyGSYU3X5m", // TheTitan
      username: "TheTitan",
      pseudoname: "Titus",
      // First name and last name criteria
      firstNameAnswer: "Titus",
      lastNameAnswer: "Invictus",
    },
    {
      // Ursula / BlueCrow
      signInEmailAddress: "u@u.com",
      hashedPassword:
        "$2a$12$ZFCN7rFeEgmVOYQ6M31mgehpGV1m8NiQ/CWGx3/qKTkJ4xOqWxhs.", // BlueCrow
      username: "BlueCrow",
      pseudoname: "Ursula",
      // First name and last name criteria
      firstNameAnswer: "Ursula",
      lastNameAnswer: "Black",
    },
    {
      // Victoria / LaVictoire
      signInEmailAddress: "v@v.com",
      hashedPassword:
        "$2a$12$QulFtzyqoOve.o6WMyLwCuzP6aUIfjksEPveRajJpcvcf.ojlGOgK", // LaVictoire
      username: "LaVictoire",
      pseudoname: "Victoria",
      // First name and last name criteria
      firstNameAnswer: "Victoria",
      lastNameAnswer: "Spice",
    },
    {
      // Wilda / oftheWild
      signInEmailAddress: "w@w.com",
      hashedPassword:
        "$2a$12$Y6eTEC/CBKoaZ7ryJDR6PuqxOaES6EZA.GjY8zjxsUb6XUYqo0die", // oftheWild
      username: "oftheWild",
      pseudoname: "Wilda",
      // First name and last name criteria
      firstNameAnswer: "Wilda",
      lastNameAnswer: "Wilderness",
    },
    {
      // Xenobia / ResRevealed
      signInEmailAddress: "x@x.com",
      hashedPassword:
        "$2a$12$v2MeRBz0ncCEBS3WMMDb.emMdjgL2Ep0bptqNRr.tsCiqcfowHsmG", // ResRevealed
      username: "ResRevealed",
      pseudoname: "Xenobia",
      // First name and last name criteria
      firstNameAnswer: "Xenobia",
      lastNameAnswer: "Desistoria",
    },
  ];

  console.log(`Seeding Users...`);

  const users = [];

  console.log(`Seeding all users...`);

  for (const userData of usersData) {
    const user = await prisma.user.upsert({
      where: {
        signInEmailAddress: userData.signInEmailAddress,
      },
      update: {},
      create: {
        state: "LIVE",
        signInEmailAddress: userData.signInEmailAddress,
        hashedPassword: userData.hashedPassword,
        username: userData.username,
        pseudoname: userData.pseudoname,
      },
    });

    users.push(user);
  }

  console.log(`...All users seeded.`);

  console.log({ users });

  console.log(`...Users seeded.`);

  console.log(`Seeding Criteria...`);

  const criteria = [];

  console.log(`Filtering users data for first names.`);

  const usersDataWithFirstNames = usersData.filter(
    (e) => e.firstNameAnswer !== undefined,
  );

  console.log(`Seeding first names criteria...`);

  for (const userData of usersDataWithFirstNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const criterion = await prisma.criterion.upsert({
      where: {
        question_userId: {
          question: "First name",
          userId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        question: "First name",
        answer: userData.firstNameAnswer,
        userId: user.id,
      },
    });

    criteria.push(criterion);
  }

  console.log(`...First names criteria seeded.`);

  console.log(`Filtering users data for last names.`);

  const usersDataWithLastNames = usersData.filter(
    (e) => e.lastNameAnswer !== undefined,
  );

  console.log(`Seeding last names criteria...`);

  for (const userData of usersDataWithLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const criterion = await prisma.criterion.upsert({
      where: {
        question_userId: {
          question: "Last name",
          userId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        question: "Last name",
        answer: userData.lastNameAnswer,
        userId: user.id,
      },
    });

    criteria.push(criterion);
  }

  console.log(`...Last names criteria seeded.`);

  console.log({ criteria });

  console.log(`...Criteria seeded.`);

  console.log(`Seeding GroupsOfCriteria...`);

  const groupsOfCriteria = [];

  console.log(`Filtering users data for first names last names.`);

  const usersDataWithFirstNamesLastNames = usersData.filter(
    (e) => e.firstNameAnswer !== undefined && e.lastNameAnswer !== undefined,
  );

  console.log(`Seeding "Names"' GroupsOfCriteria...`);

  for (const userData of usersDataWithFirstNamesLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = await prisma.groupOfCriteria.upsert({
      where: {
        name_creatorUserId: {
          name: "Names",
          creatorUserId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        name: "Names",
        description: "My first name, last name and other names.",
        creatorUserId: user.id,
      },
    });

    groupsOfCriteria.push(groupOfCriteria);
  }

  console.log(`..."Names"' GroupsOfCriteria seeded.`);

  console.log({ groupsOfCriteria });

  console.log(`...GroupsOfCriteria seeded.`);

  console.log(`Seeding GroupOfCriteriaCriteria...`);

  console.log(
    `Seeding "Names"' GroupsOfCriteria' "First name" Criteria – GroupOfCriteriaCriteria...`,
  );

  for (const userData of usersDataWithFirstNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = groupsOfCriteria.find(
      (e) => e.creatorUserId === user.id && e.name === "Names",
    );

    if (!groupOfCriteria)
      return console.error(
        `Error: Somehow the group of criteria with the creator user ID of ${user.username} and the name "Names" was not found.`,
      );

    const criterion = criteria.find(
      (e) => e.userId === user.id && e.question === "First name",
    );

    if (!criterion)
      return console.error(
        `Somehow the criterion with the user ID of ${user.username} and the question "First name" was not found.`,
      );

    await prisma.groupOfCriteriaCriterion.upsert({
      where: {
        groupOfCriteriaId_criterionId: {
          groupOfCriteriaId: groupOfCriteria.id,
          criterionId: criterion.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        groupOfCriteria: {
          connect: {
            name_creatorUserId: {
              name: "Names",
              creatorUserId: user.id,
            },
          },
        },
        criterion: {
          connect: {
            question_userId: {
              question: "First name",
              userId: user.id,
            },
          },
        },
      },
    });
  }

  console.log(
    `..."Names"' GroupsOfCriteria' "First name" Criteria – GroupOfCriteriaCriteria seeded.`,
  );

  console.log(
    `Seeding "Names"' GroupsOfCriteria' "Last name" Criteria – GroupOfCriteriaCriteria...`,
  );

  for (const userData of usersDataWithLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = groupsOfCriteria.find(
      (e) => e.creatorUserId === user.id && e.name === "Names",
    );

    if (!groupOfCriteria)
      return console.error(
        `Error: Somehow the group of criteria with the creator user ID of ${user.username} and the name "Names" was not found.`,
      );

    const criterion = criteria.find(
      (e) => e.userId === user.id && e.question === "Last name",
    );

    if (!criterion)
      return console.error(
        `Error: Somehow the criterion with the user ID of ${user.username} and the question "Last name" was not found.`,
      );

    await prisma.groupOfCriteriaCriterion.upsert({
      where: {
        groupOfCriteriaId_criterionId: {
          groupOfCriteriaId: groupOfCriteria.id,
          criterionId: criterion.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        groupOfCriteria: {
          connect: {
            name_creatorUserId: {
              name: "Names",
              creatorUserId: user.id,
            },
          },
        },
        criterion: {
          connect: {
            question_userId: {
              question: "Last name",
              userId: user.id,
            },
          },
        },
      },
    });
  }

  console.log(
    `..."Names"' GroupsOfCriteria' "Last name" Criteria – GroupOfCriteriaCriteria seeded.`,
  );

  console.log(`...GroupOfCriteriaCriteria seeded.`);

  console.log(`...Initial seeds complete.`);
}

seed();

/* Notes
// rm ./prisma/dev.db
// npx prisma db push
// npx prisma db seed

// "type": "module",

// "prisma": {
//   "seed": "node --loader ts-node/esm prisma/seeds.js"
// }
// npx prisma db seed
*/

/* Warning
(node:65301) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)

For now, I'll just leave this as is. I even install tsconfig-paths like in the Remix Jokes tutorial example but to no avail.
https://www.npmjs.com/package/tsconfig-paths 
https://remix.run/docs/en/main/tutorials/jokes 
*/

/* Previous working seeds
  console.log(`Beginning initial seeds...`);

  console.log(`Creating users data.`);

  const usersData = [
    {
      // “me” / LePapier
      signInEmailAddress: "l@l.me",
      hashedPassword:
        "$2a$12$7IgXH7ORHd4x5O7.VC5LROJJFMq620II9ESleuMIYs.6KNDAsEYAe", // LePapier
      username: "LePapier",
      pseudoname: "“me”",
      // First name and last name criteria
      firstNameAnswer: "Luther",
      lastNameAnswer: "Tchofo Safo",
    },
    {
      // Alice / Alice-chan
      signInEmailAddress: "a@a.com",
      hashedPassword:
        "$2a$12$uePHXFQIZxmEqAyvU74txewChLSQsnYt6zvf0m2ad7pnO0ORvRwh.", // Alice-chan
      username: "Alice-chan",
      pseudoname: "Alice",
      // First name and last name criteria
      firstNameAnswer: "Alice",
      lastNameAnswer: "Perrini",
    },
    {
      // Bianca / Trovounette
      signInEmailAddress: "b@b.com",
      hashedPassword:
        "$2a$12$LxyeiZiFQ2t2m7rODda9B.O171J3GPuva77qfCLCSAUhZ60EWTFwW", // Trovounette
      username: "Trovounette",
      pseudoname: "Bianca",
      // First name and last name criteria
      firstNameAnswer: "Bianca",
      lastNameAnswer: "Trovò",
    },
    {
      // Candice / Candi
      signInEmailAddress: "c@c.com",
      hashedPassword:
        "$2a$12$dCJyvJBRaz8bpgLHRrHW2etVFXD0s51/r8tkdkZwXT8zXeBxT.Kb2", // Candi
      username: "Candi",
      pseudoname: "Candice",
      // First name and last name criteria
      firstNameAnswer: "Candice",
      lastNameAnswer: "Namubiru",
    },
    {
      // Danny / D-Dan
      signInEmailAddress: "d@d.com",
      hashedPassword:
        "$2a$12$iUu18mSH7lUoZc7g6g3sjuTVwy72Vyvc/kpTB9b0FERZA0ETepGP6", // D-Dan
      username: "D-Dan",
      pseudoname: "Danny",
      // First name and last name criteria
      firstNameAnswer: "Daniel",
      lastNameAnswer: "Craig",
    },
    {
      // Elijah / El-Hadj
      signInEmailAddress: "e@e.com",
      hashedPassword:
        "$2a$12$3AYWQwwEm70zwEpnP4AIyu49TEyNgvv1eMQvz0c.PgxmDZryZz67.", // El-Hadj
      username: "El-Hadj",
      pseudoname: "Elijah",
      // First name and last name criteria
      firstNameAnswer: "Elijah",
      lastNameAnswer: "Portgas",
    },
    {
      // Fiona / FioTriangle
      signInEmailAddress: "f@f.com",
      hashedPassword:
        "$2a$12$iwnzkb.lDDFRIHHBGMmOEONw00W/GIwX7OD8JxNhMciuLvk/rALbW", // FioTriangle
      username: "FioTriangle",
      pseudoname: "Fiona",
      // First name and last name criteria // N/A
    },
    {
      // Grace / Gracie-babie
      signInEmailAddress: "g@g.com",
      hashedPassword:
        "$2a$12$6yHob1L9kfrWTYM3B6pL1u67CnHI/AKMaxtfv28Ydk5VzxDeuhCUq", // Gracie-babie
      username: "Gracie-babie",
      pseudoname: "Grace",
      // First name and last name criteria // N/A
    },
    // {
    //   // Hector / Hectavus
    //   signInEmailAddress: "h@h.com",
    //   // hashedPassword: // Hectavus
    //   username: "Hectavus",
    //   pseudoname: "Hector"
    // },
    {
      // Lucas / Lucario
      signInEmailAddress: "l@l.com",
      hashedPassword:
        "$2a$12$oOJFmvblCEREkIlI/UcYIO8mOFF0OewEmYNXyB8MHlU.ZKU3dWuRC", // Lucario
      username: "Lucario",
      pseudoname: "Lucas",
      // First name and last name criteria
      firstNameAnswer: "Lucas",
      lastNameAnswer: "Earthbound",
    },
    {
      // Malcolm / MisterX
      signInEmailAddress: "m@m.com",
      hashedPassword:
        "$2a$12$wL5QmeFlP4ZErJ4w3nwN..feiXznhw4HDApZrI7he/zEyGY7Njg8G", // MisterX
      username: "MisterX",
      pseudoname: "Malcolm",
      // First name and last name criteria
      firstNameAnswer: "Malcolm",
      lastNameAnswer: "Little",
    },
    {
      // Nancy / Nonyes
      signInEmailAddress: "n@n.com",
      hashedPassword:
        "$2a$12$XrYHAPv0JJx9kHD75uOpqeuiopl1HLuMuGoXQJa8EzslhmgMw7Ntu", // Nonyes
      username: "Nonyes",
      pseudoname: "Nancy",
      // First name and last name criteria
      firstNameAnswer: "Nancy",
      lastNameAnswer: "Commodore",
    },
    {
      // Ophelia / Ophelia-swan
      signInEmailAddress: "o@o.com",
      hashedPassword:
        "$2a$12$nvpZFeUg3qgtbVonnbcWNOxsXxHqj643v7gBQs0OWo/VobRYAsP/G", // Ophelia-swan
      username: "Ophelia-swan",
      pseudoname: "Ophelia",
      // First name and last name criteria
      firstNameAnswer: "Ophelia",
      lastNameAnswer: "Rainbow",
    },
    {
      // Pamela / Pimpampoum
      signInEmailAddress: "p@p.com",
      hashedPassword:
        "$2a$12$/aojscO6dz4Oypig/dx1NuJ2DNYZn3RW5BfQVAzYwYyftmmkS6VUW", // Pimpampoum
      username: "Pimpampoum",
      pseudoname: "Pamela",
      // First name and last name criteria
      firstNameAnswer: "Pamela",
      lastNameAnswer: "Nargacuga",
    },
    {
      // Quentin / WhoDidThatToYou
      signInEmailAddress: "q@q.com",
      hashedPassword:
        "$2a$12$GUVQktRR33Pxm9lxVAhmbu9SC.dInMR2h3Q7oNL3zYOngDaB7tOEe", // WhoDidThatToYou
      username: "WhoDidThatToYou",
      pseudoname: "Quentin",
      // First name and last name criteria
      firstNameAnswer: "Quentin",
      lastNameAnswer: "Tartarino",
    },
    {
      // Roland / RG
      signInEmailAddress: "r@r.com",
      hashedPassword:
        "$2a$12$upWLe7nfwK8mxnCJccSpEuhuq7Zgcl6zP0iOopC3vgyLDW1LH9dkO", // RG
      username: "RG",
      pseudoname: "Roland",
      // First name and last name criteria
      firstNameAnswer: "Roland",
      lastNameAnswer: "Gerric",
    },
    {
      // Soren / TruePrince
      signInEmailAddress: "s@s.com",
      hashedPassword:
        "$2a$12$G2A1bB4nKn66WVC9lkQWP.9qh2//xod6vQbTZNisyPB39YyuSTQiO", // TruePrince
      username: "TruePrince",
      pseudoname: "Soren",
      // First name and last name criteria
      firstNameAnswer: "Soren",
      lastNameAnswer: "Daein",
    },
    {
      // Titus / TheTitan
      signInEmailAddress: "t@t.com",
      hashedPassword:
        "$2a$12$OcHGmHR.zYmGo08sC80ZZuyP9KntjOHVG6RnrFKXnw2HyGSYU3X5m", // TheTitan
      username: "TheTitan",
      pseudoname: "Titus",
      // First name and last name criteria
      firstNameAnswer: "Titus",
      lastNameAnswer: "Invictus",
    },
    {
      // Ursula / BlueCrow
      signInEmailAddress: "u@u.com",
      hashedPassword:
        "$2a$12$ZFCN7rFeEgmVOYQ6M31mgehpGV1m8NiQ/CWGx3/qKTkJ4xOqWxhs.", // BlueCrow
      username: "BlueCrow",
      pseudoname: "Ursula",
      // First name and last name criteria
      firstNameAnswer: "Ursula",
      lastNameAnswer: "Black",
    },
    {
      // Victoria / LaVictoire
      signInEmailAddress: "v@v.com",
      hashedPassword:
        "$2a$12$QulFtzyqoOve.o6WMyLwCuzP6aUIfjksEPveRajJpcvcf.ojlGOgK", // LaVictoire
      username: "LaVictoire",
      pseudoname: "Victoria",
      // First name and last name criteria
      firstNameAnswer: "Victoria",
      lastNameAnswer: "Spice",
    },
    {
      // Wilda / oftheWild
      signInEmailAddress: "w@w.com",
      hashedPassword:
        "$2a$12$Y6eTEC/CBKoaZ7ryJDR6PuqxOaES6EZA.GjY8zjxsUb6XUYqo0die", // oftheWild
      username: "oftheWild",
      pseudoname: "Wilda",
      // First name and last name criteria
      firstNameAnswer: "Wilda",
      lastNameAnswer: "Wilderness",
    },
    {
      // Xenobia / ResRevealed
      signInEmailAddress: "x@x.com",
      hashedPassword:
        "$2a$12$v2MeRBz0ncCEBS3WMMDb.emMdjgL2Ep0bptqNRr.tsCiqcfowHsmG", // ResRevealed
      username: "ResRevealed",
      pseudoname: "Xenobia",
      // First name and last name criteria
      firstNameAnswer: "Xenobia",
      lastNameAnswer: "Desistoria",
    },
  ];

  console.log(`Seeding users...`);

  const users = [];

  for (const userData of usersData) {
    const user = await prisma.user.upsert({
      where: {
        signInEmailAddress: userData.signInEmailAddress,
      },
      update: {},
      create: {
        state: "LIVE",
        signInEmailAddress: userData.signInEmailAddress,
        hashedPassword: userData.hashedPassword,
        username: userData.username,
        pseudoname: userData.pseudoname,
      },
    });

    users.push(user);
  }

  console.log({ users });

  console.log(`...Users seeded.`);

  console.log(`Filtering users data for first names.`);

  const usersDataWithFirstNames = usersData.filter(
    (e) => e.firstNameAnswer !== undefined,
  );

  console.log(`Seeding first names criteria...`);

  for (const userData of usersDataWithFirstNames) {
    await prisma.criterion.create({
      data: {
        question: "First name",
        answer: userData.firstNameAnswer,
        user: {
          connect: {
            signInEmailAddress: userData.signInEmailAddress,
          },
        },
      },
    });
  }

  console.log(`...First names criteria seeded.`);

  console.log(`Filtering users data for last names.`);

  const usersDataWithLastNames = usersData.filter(
    (e) => e.lastNameAnswer !== undefined,
  );

  console.log(`Seeding last names criteria...`);

  for (const userData of usersDataWithLastNames) {
    await prisma.criterion.create({
      data: {
        question: "Last name",
        answer: userData.lastNameAnswer,
        user: {
          connect: {
            signInEmailAddress: userData.signInEmailAddress,
          },
        },
      },
    });
  }

  console.log(`...Last names criteria seeded.`);

  console.log(`Initial seeds complete.`);
*/
