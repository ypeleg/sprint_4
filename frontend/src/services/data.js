import { random } from './util.service.js'

const USER_POOL = [
    {_id: 'u101', fullname: 'Abi Abambi', imgUrl: 'roi.png'},
    {_id: 'u102', fullname: 'Josh Ga',    imgUrl: 'roi.png'},
    {_id: 'u103', fullname: 'Nina X',     imgUrl: 'roi.png'},
    {_id: 'u104', fullname: 'Megan X',    imgUrl: ''},
    {_id: 'u105', fullname: 'Sam L',      imgUrl: ''},
    {_id: 'u106', fullname: 'Oliver Z',   imgUrl: ''}
]

const allImgs = ["01003703-be60-40c1-b151-10c0a26e852e.jpg", "32735c6d-8562-4a57-a8d8-23ee1c578889.jpg", "5480023e-a03d-456b-8959-d7c4aaf1eac9.jpg", "80cd1878-c671-4b6e-882e-eb63a3dde439.jpg", "a4cb48cf-01f2-495e-a74d-3c1ba8a52f4d.jpg", "ddb0b59f-c798-45d7-ac1f-a2f9120b07bb.jpg", "01041c3a-4128-4f84-9072-feb575883efa.jpg", "32ef8c64-1f0d-44b0-8694-b5ac4efcbe3b.jpg", "554cec01-fcea-4561-a833-bede5151e305.jpg", "826830d1-0dc7-4caa-a3ea-244a3328761b.jpg", "a7076a10-91cd-4a45-81d9-1523fd81befc.jpg", "df185262-dcee-4f92-8780-a324cff2f0ad.jpg", "019e9d85-c9ac-42fd-a27b-e36fca7ac6ee.jpg", "33816a98-8be7-4d31-bffe-fd46bef6a62e.jpg", "56dea029-a440-46a7-b1d4-f7398a4183e3.jpg", "8494c3db-b537-4e49-80fd-d4b482a76420.jpg", "a78254cb-e7bd-4a4b-b5f4-41c3bd5028a2.jpg", "e16d94b8-0396-416d-86b0-bcca41bb72da.jpg", "061d63d4-91ff-474b-9e64-fff2dadeaea4.jpg", "33fbdae2-e3dc-4ae5-a385-f18d15f9204d.jpg", "574ab23b-8b01-47b8-a1f3-ecacb23b67eb.jpg", "86e0780b-afe3-4843-9116-b071c9620e90.jpg", "a9e71cd9-1c34-4fba-b0b7-d21d5b600143.jpg", "e337ff26-f694-400d-9fc5-7ae858fe9e37.jpg", "078c780a-6d0e-4807-89c2-485ddcaa90df.jpg", "34495b0c-fed0-48c3-a253-cf034f773a79.jpg", "5830f026-27ba-4bdc-8437-c90c818984ba.jpg", "875d01d4-62f6-4fc0-b160-7b981701a0ce.jpg", "ac5c4fab-e18b-4a5f-91bc-2cd9aa844361.jpg", "e3912742-07e9-4399-a205-3db11f010278.jpg", "0831db99-4a37-45f6-94b3-05b95a07795b.jpg", "35128f02-b700-4886-ac11-1bfb6dcf1c3b.jpg", "58c0fc8a-dc13-449b-8565-265379c78803.jpg", "88520ef6-eb64-4d1e-b03b-56554c5a6391.jpg", "b03bd233-7313-457c-ad34-9b2835cd30f1.jpg", "e6ac137a-19d9-4665-9306-f39bd9979246.jpg", "0872983e-3fff-4b7b-b9a0-a990aff86c9d.jpg", "3633bf64-5769-4cfa-bf65-24d9319f84fa.jpg", "596dbff5-0aee-49ae-a8da-8013bbb15271.jpg", "88f73c06-18ea-4227-b4af-ab5b8f893a25.jpg", "b31f8833-0d78-40ef-98bf-70757fbe60a4.jpg", "e8739704-e108-42cd-8ce9-db82d8abeecc.jpg", "08af386a-9bce-4394-8c62-81a84f40a3af.jpg", "36db902f-7430-4cc8-a620-d9aa79167a6b.jpg", "5c93346d-22e5-4cfa-914d-d5cf2add9a1d.jpg", "8ac1f005-ef34-4a29-bf0d-a0eb33e7eecd.jpg", "b4951272-26f9-447b-9da0-e80d1f25c507.jpg", "ed0a60c1-1631-4086-87cf-2508bc936a79.jpg", "0ecd509e-2b30-4eb9-b45e-76f13bbe9bfa.jpg", "38056d10-0f0b-40e5-9242-865df3d352f0.jpg", "5fa54252-8f96-4bbe-9e00-0828b4230378.jpg", "8b17f7e3-7dc6-4b82-8e51-6ece15781d99.jpg", "b6b6f563-6cfd-4388-81b4-7efd864f0c73.jpg", "ed1510eb-cf80-46f6-9d7b-40ce2af4ec56.jpg", "10009400-6771-4678-bace-ecf34252ae70.jpg", "39057bae-aad1-4880-b872-ce0b1b5938e4.jpg", "5fb0902e-85ba-48e4-8335-7d7f3538c1a1.jpg", "8b53fc8a-c05f-4971-bc49-f9b41d3f8b98.jpg", "b6f34e51-5c0a-46bc-8eb0-b472a52c12b0.jpg", "ed1f5d35-d7de-4db2-99d1-6977a084f8b2.jpg", "10884029-2141-4295-a8f1-3c9c63368b95.jpg", "39fa19ed-1646-4a06-a5f8-1ffe761282e8.jpg", "5fbaaecb-b7cb-41be-9f1a-7636745a6f0d.jpg", "8b612076-a125-49b0-bf54-9ede47bb4ab2.jpg", "b8b2147a-4672-4335-91f8-875cf4a094f9.jpg", "eda91369-5d70-43b2-b29d-03e1fdc14dbd.jpg", "108e8723-2772-415a-be1e-98ade063f6b1.jpg", "3a0c5119-739c-4c49-96f4-00e2d2e697cc.jpg", "5fe8c18c-bcd7-41e4-b5f4-a4245872fcf4.jpg", "8eaa6cce-2b7d-4a2f-8c96-ad11289e1cb6.jpg", "ba25285a-9241-4559-a3f6-41777a27ce77.jpg", "edb36f31-2379-4ce6-be7d-63dd67f260cf.jpg", "12d43903-7490-49f1-858e-da12ec561fc5.jpg", "3bc024fd-1a20-4750-bf64-877a78ac5875.jpg", "625d33e5-249a-4533-a6de-73ca0996c0e5.jpg", "9174eb19-eb00-4f18-bcc6-8e4908af6aa3.jpg", "c155e63b-2b46-4102-b7cd-125a562b9f01.jpg", "ee39b7bf-c84c-4f9b-a6fe-245c845b2fed.jpg", "12d6491b-a0db-49f9-8ed8-12460bb73f00.jpg", "3c611b87-e3cd-4414-90a9-50c445c42520.jpg", "640c503d-4434-4011-bb63-e52f4f2ca6d0.jpg", "91a655ce-c91a-4243-996d-1693fcd20b4e.jpg", "c2365302-fc2f-4b69-9d24-6dcfd8395976.jpg", "ef797c08-bdb5-4db3-8b81-2d8a70898c2a.jpg", "13b95de3-6dda-41f0-83cf-6f861b3ffb65.jpg", "3d4470d6-3213-4e44-9ec4-ddea7b2c2688.jpg", "645c3161-966f-4553-b3a7-ab26bb897a24.jpg", "91dc0072-c2a8-4565-8ad7-a7f54a0d58c7.jpg", "c28c1d41-b707-47c4-ad76-d4b255ed62c2.jpg", "f1ac4127-b7f2-4a06-b27f-5ebe9e038e5d.jpg", "144e2aed-dcb7-4510-8018-bf564a81b34b.jpg", "3d6c2c5a-2f61-4246-8235-57f96410c20b.jpg", "64ef227f-223b-4c62-8b0c-f169455ed79c.jpg", "92fbe43a-f167-41cb-9542-826a302502e4.jpg", "c2a05cd9-9528-4e39-b32c-3a85812b1b28.jpg", "f24ab613-424f-4816-9add-cc8f72480a1d.jpg", "16abf83d-954e-4b4b-9b2a-0238209327ba.jpg", "3d7fbc23-3dff-43c4-8a9e-597dc6f12be8.jpg", "660eb384-e804-41a0-a6be-04cfdb29d904.jpg", "95c99efc-f444-4a7f-beb6-17747e1bac0a.jpg", "c55f8684-d820-4857-bbc2-d3b4145cc562.jpg", "f29f34b6-faf4-4880-b320-8b7c8e5c8a5b.jpg", "179d2927-bd56-44e1-babf-5c12a2235f6e.jpg", "3dfb8af6-2556-4211-9bcf-94425b3ac3a7.jpg", "666bb8fe-c88f-49da-83a9-1fe0f5c91eb9.jpg", "977f2830-4b39-4006-860b-fa3231f271e1.jpg", "c8020170-1402-412d-b8ae-2a998f2eae59.jpg", "f5fc061a-2e83-4c55-8810-eaef8e4a10ad.jpg", "18e7de16-e629-4f05-a81f-d3ee4695ac19.jpg", "400fcd6d-48fe-460a-88e8-22d93e785bfb.jpg", "689690d6-90f7-4627-9a59-894b36c31505.jpg", "98986afc-61cb-4907-bdae-22c65d27dafd.jpg", "c836557a-cb7c-4683-a6a0-cce06cf69fd7.jpg", "f6b50b5a-6479-42c3-94b6-8343cf5c0b20.jpg", "1d8ae529-f60b-4d19-bfe3-f1edb57c9107.jpg", "41354b06-ad32-46f6-ba1a-148580f6f866.jpg", "69bac244-3143-4d0c-b319-42b43c050cb9.jpg", "99bfc371-04cb-4d5b-ba8f-ad67103fdbbc.jpg", "c865a552-d336-4215-8c0c-b2ae9f4beec5.jpg", "f76b195f-0e46-4468-8ffa-38d380429fbe.jpg", "1f615a8f-abef-4e24-9e57-ddf2112f2004.jpg", "41c055fc-550e-4e65-b6ba-5e78937858f9.jpg", "69c55c37-3283-4587-8e42-d576655f586f.jpg", "99d989db-0662-4307-bf1f-a8955d96a1aa.jpg", "c8f3f5a5-e4dd-4a3c-8cf3-c292da493413.jpg", "f7b23393-1b58-4c46-9c46-316ee9015fb1.jpg", "1f7c560e-0e8a-46ad-a7e5-dca9d33881a0.jpg", "423961a7-8134-47e7-8ae0-bfbe5e5baa03.jpg", "6bd4c970-5c49-4785-95e7-8d3c660629ca.jpg", "9a4d3b98-7489-4dd7-86d7-090d2c943c77.jpg", "c932ac80-7622-4d63-9611-d5d4d7153c0c.jpg", "f8c1a593-d375-4c21-aa3e-4f75e8bf40b0.jpg", "224bc9e6-6745-4d7c-9c05-3633ebc48f02.jpg", "42c3e5eb-3bf2-4d71-a12e-e150e33225be.jpg", "6ca21177-e525-4734-98d1-ec3da0271b94.jpg", "9a87130c-ec94-49fa-990e-63b32ba93ffd.jpg", "c9f87e63-bc9d-43e2-bd71-d1a5850f5cac.jpg", "f98294ea-42f9-4bcf-9949-6c887673ef37.jpg", "228e0fa2-875a-42e3-bff7-587d259d6cc2.jpg", "42cb76d9-6f70-4737-bef4-d1fc8177e8ff.jpg", "6d1964a6-f916-4dbd-bb76-ddfdbf913aa7.jpg", "9b6a3f64-0978-4923-a61e-d1407af9d538.jpg", "cac72229-06fc-4b48-a19b-de57a4e3631e.jpg", "f99035ac-ec4e-4124-9498-2810238835bb.jpg", "238d234d-d117-459f-9619-145f99483fb5.jpg", "4612c14c-ae23-4fe6-867f-8f893efa2f7b.jpg", "757157fa-b17f-4fd5-a997-1918c3befecf.jpg", "9ca7f809-a672-4bf1-a3b5-cc2fed953aa3.jpg", "cbcc7033-01e7-48b3-99ec-bd0a739a3cbe.jpg", "fa7cf99a-145f-408a-bd77-2d6349dae0bc.jpg", "24f9a6ae-4491-44d9-9684-abca43dc7cec.jpg", "472289e4-bd4c-4ee8-b675-ef92f14dbbb1.jpg", "78a5403f-4833-4ed2-87a8-acf08778e7b6.jpg", "9dd48de2-98de-4874-8f56-cc6e6fb97a36.jpg", "ced2113e-2607-41e1-8a01-b8bf809ef3a6.jpg", "fa84d1ef-7554-495e-99ee-ea0571c9522a.jpg", "25717add-d2f8-417b-b21c-654dfd59ea13.jpg", "4917c69e-50b5-41e4-9f18-f0fb59d180ea.jpg", "7a082264-c21d-4977-bb71-87bd516e959c.jpg", "9e9668ac-2bd3-4e8a-b367-ed088a41d521.jpg", "cf4c53d9-28a8-4ce8-bf13-47cf8bf1f282.jpg", "fb2c1d94-fe24-4d76-bd36-26796a01548e.jpg", "2596530f-bd0c-43ca-aca8-88b2ada2985a.jpg", "499220bd-cf3d-4a4c-8187-1fa8df1a4b17.jpg", "7b2d6696-fafb-4d0a-8570-370f4f735e41.jpg", "9f2176a1-d878-4c60-ac1f-5157bbe02c54.jpg", "d1188a02-ac1e-4e1d-a504-96bb73054d79.jpg", "fc3ac55b-9c8e-481d-be63-714d78bca579.jpg", "28ad2fe1-1b59-4a33-ab79-0c114b90c327.jpg", "4a6c0703-db64-4dc3-925c-b17e4976bae6.jpg", "7c300b78-e023-41a9-b391-299f72f9ed8a.jpg", "a02ee1bd-8b41-4dbc-968c-e827f3478777.jpg", "d3b5e765-b4e9-46bc-b3c6-71b1e50c191a.jpg", "fe4a18e1-f169-4c15-966c-79faeeec1600.jpg", "2a4e391e-022b-4b72-b8f4-b173194e5c10.jpg", "4cdca627-d9c5-4e47-bdeb-11ab74818440.jpg", "7cc3bd2a-175b-41ac-83c8-998e26b9cb75.jpg", "a04bd4d4-80a5-4e26-8f06-f8c2e60c3563.jpg", "d4791c7f-1a58-47bd-8ec7-ff4d3ad851de.jpg", "fea95684-880c-4124-8dc8-bffc92409fd4.jpg", "2d108291-4e70-469d-9073-955786865ab7.jpg", "4ed1c920-b683-4cfc-a475-b1e4479d9a84.jpg", "7d15fe1a-ce1d-411e-9e0c-b10b1df03132.jpg", "a223d3ad-0886-48e7-90c9-a91d6874c8b1.jpg", "d5435939-751a-44c5-bdc3-498a9bc1f9a3.jpg", "2deb4dbe-1bcb-4351-a361-0540a2a8f20f.jpg", "50d8dada-82c6-4eee-bbd6-f368d518968e.jpg", "7df04b54-b021-4489-b35a-d41d491e232e.jpg", "a282e6c3-934a-4a0e-bfcf-7dcb58646162.jpg", "d7521c56-4fbb-4bf2-a119-3458ea99985d.jpg", "300334a1-e0d2-4ea5-8d9a-6c427555b75e.jpg", "5245098d-33f3-4152-990a-daba45694b75.jpg", "7e55a2bc-009f-4f5e-9088-9c8e3bdeba19.jpg", "a30cb0f4-7b7f-411a-808c-215357684eae.jpg", "d75a3062-9335-4f4c-ad15-f8db3d76f583.jpg", "30a28431-e95b-41e9-87ce-746a9671f0d1.jpg", "52a48962-78ed-490b-bebc-269f9b524526.jpg", "7f79841a-d119-40f5-8ba6-97c36815997b.jpg", "a34f1211-92bf-4384-b754-9102890c9805.jpg", "d9720755-3891-4dc6-9d7b-0c4da384458d.jpg"]
const firstNames = [
    'Aaron', 'Abigail', 'Adam', 'Aisha', 'Alan', 'Alex', 'Alice', 'Amelia', 'Andrew', 'Anna',
    'Bella', 'Benjamin', 'Blake', 'Brian', 'Caitlin', 'Carlos', 'Charlotte', 'Chloe', 'Chris', 'Clara',
    'Daniel', 'David', 'Diana', 'Diego', 'Dylan', 'Elena', 'Elijah', 'Emily', 'Ethan', 'Eva',
    'Fiona', 'Frank', 'Gabriel', 'Grace', 'Hannah', 'Henry', 'Holly', 'Ian', 'Isaac', 'Isabella',
    'Jack', 'Jacob', 'Jade', 'James', 'Jane', 'Jason', 'Jennifer', 'Jessica', 'John', 'Jonah',
    'Julia', 'Karen', 'Kate', 'Kevin', 'Kyle', 'Laura', 'Leo', 'Liam', 'Lily', 'Linda',
    'Lucas', 'Maria', 'Mason', 'Matthew', 'Mia', 'Michael', 'Natalie', 'Nathan', 'Nina', 'Noah',
    'Olivia', 'Oscar', 'Owen', 'Paige', 'Patrick', 'Paula', 'Peter', 'Quinn', 'Rachel', 'Rebecca',
    'Ryan', 'Sam', 'Sarah', 'Sean', 'Sophia', 'Steve', 'Taylor', 'Thomas', 'Tina', 'Victor',
    'Wendy', 'William', 'Xander', 'Yara', 'Yvonne', 'Zach', 'Zoe'
]

const lastNames = [
    'Adams', 'Allen', 'Alvarez', 'Anderson', 'Bailey', 'Baker', 'Barnes', 'Bell', 'Bennett', 'Brooks',
    'Brown', 'Campbell', 'Carter', 'Castillo', 'Chavez', 'Clark', 'Collins', 'Cook', 'Cooper', 'Cox',
    'Cruz', 'Davis', 'Diaz', 'Edwards', 'Ellis', 'Evans', 'Fernandez', 'Fisher', 'Flores', 'Ford',
    'Garcia', 'Gomez', 'Gonzalez', 'Gray', 'Green', 'Hall', 'Harris', 'Hernandez', 'Hill', 'Howard',
    'Hughes', 'Jackson', 'James', 'Jenkins', 'Johnson', 'Jones', 'Kim', 'King', 'Lee', 'Lewis',
    'Lopez', 'Martin', 'Martinez', 'Miller', 'Mitchell', 'Moore', 'Morales', 'Morgan', 'Murphy', 'Nelson',
    'Nguyen', 'Ortiz', 'Parker', 'Patel', 'Perez', 'Peterson', 'Phillips', 'Powell', 'Price', 'Ramirez',
    'Reed', 'Reyes', 'Rivera', 'Roberts', 'Robinson', 'Rodriguez', 'Rogers', 'Ross', 'Ruiz', 'Sanchez',
    'Sanders', 'Scott', 'Smith', 'Stewart', 'Sullivan', 'Taylor', 'Thomas', 'Thompson', 'Torres', 'Turner',
    'Walker', 'Ward', 'Watson', 'White', 'Williams', 'Wilson', 'Wood', 'Wright', 'Yang', 'Young'
]

let gUsersPool = []
for (let i = 0; i < 20; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    let imgUrl = 'generated_faces/' + allImgs[Math.floor(Math.random() * allImgs.length)]
    if (Math.random() < 0.5) imgUrl = null
    gUsersPool.push({
        _id: `u${i + 1}`,
        fullname: fullName,
        imgUrl: imgUrl
    });
}

console.log(gUsersPool)

const STATUS_OPTIONS = ['inProgress','done','review','stuck','blocked']
const PRIORITY_OPTIONS = ['low','medium','high']
const CMP_ORDER_OPTIONS = ['StatusPicker','MemberPicker','DatePicker','SomeNewPicker','OtherPicker']

export function getRandomLocation() {
    const locations = [
        { name: "Tel Aviv-Yafo", lat: 32.109333, lng: 34.855499, zoom: 11 },
        { name: "New York City", lat: 40.7128, lng: -74.0060, zoom: 12 },
        { name: "Paris", lat: 48.8566, lng: 2.3522, zoom: 12 },
        { name: "Tokyo", lat: 35.6895, lng: 139.6917, zoom: 12 },
        { name: "London", lat: 51.5074, lng: -0.1278, zoom: 12 },
        { name: "Sydney", lat: -33.8688, lng: 151.2093, zoom: 12 }
    ];
    return random.choice(locations);
}

function getRandomAttachments() {
    const cnt = random.randint(0,3)
    return Array.from({length: cnt}, () => ({
        path: `file-${random.randint(1,999)}.png`,
        date: Date.now() - random.randint(0,1_000_000_000),
        text: random.choice([random.lorem(random.randint(1,5)), ''])
    }))
}
function getRandomActivity() {
    const cnt = random.randint(1,4)
    return Array.from({length: cnt}, () => {
        const byMember = random.choice(gUsersPool)
        return {
            id: random.id(),
            title: random.lorem(random.randint(2,6)),
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            }
        }
    })
}

const BADGE_OPTIONS_MAP = {
    risk:       ['Low','Moderate','High'],
    approved:   ['Open','Blocked','In Review','Done'],
    priority:   ['Low','Medium','High'],
    now:        ['Heads Up','Hotfix','Immediate']
}
const BADGE_COLOR_MAP = {
    risk:     '#fdddc7',
    approved: '#f8e6a0',
    priority: '#ffe2bd',
    now:      '#ffc0cb'
}

const BADGE_TEXT_COLOR_MAP = {
    risk:     '#6e3b0d',
    approved: '#4f3a0e',
    priority: '#6e3b0d',
    now:      '#6e0d3a'
}

function getRandomBadges() {
    const count = random.randint(0,3)
    return Array.from({length: count}, () => {
        const badgeType  = random.choice(['risk','approved','priority','now'])
        return {
            id: random.id(),
            // text: random.choice(BADGE_OPTIONS_MAP[badgeType]),
            categ: random.choice(['Risk','Status','Priority','Heads Up']),
            // badeType: badgeType,
            color: BADGE_COLOR_MAP[badgeType] || '#ccc',
            textColor: BADGE_TEXT_COLOR_MAP[badgeType] || '#000',
            badgeOptions: BADGE_OPTIONS_MAP[badgeType] || [],
            chosenOption: random.choice(BADGE_OPTIONS_MAP[badgeType])
        }
    })
}

function getRandomChecklists() {
    const cCount = random.randint(0,2)
    return Array.from({length: cCount}, () => {
        const tCount = random.randint(1,5)
        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            progress: random.randint(0,100),
            todos: Array.from({length: tCount}, () => ({
                id: random.id(),
                title: random.lorem(random.randint(2,4)),
                isDone: random.choice([true,false])
            }))
        }
    })
}

function getRandomTask() {
    return {
        id: random.id(),
        title: random.lorem(random.randint(1,5)),
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate: random.date('2024-01-01','2026-12-31').toISOString(),
        createdAt: random.date('2024-01-01','2026-12-31'),
        description: random.lorem(random.randint(5,15)),
        checklists: getRandomChecklists(),
        // memberIds: random.sample(USER_POOL.map(u=>u._id), random.randint(0, USER_POOL.length)),
        members: random.sample(gUsersPool, random.randint(0, gUsersPool.length)),
        style:
            random.choice([
                {
                    backgroundColor: (getRandomColorLabels()),
                    coverSize: random.choice(['small', 'large'])
                },
                {
                    backgroundImage: random.choice([
                        null, null, null, `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
                        'cover-img.png', 'cover-img-1.png', 'cover-img-2.png', 'cover-img-3.png', 'amination_gif.gif',
                    ]),
                    coverSize: random.choice(['small', 'large'])
                },
                {

                },
                {

                },
                {

                }

            ]),

        badges: getRandomBadges(),
        attachments: getRandomAttachments(),
        activity: getRandomActivity(),
        isUserWatching: random.choice([true,false]),
        labels: getRandomLabels(),
        location: random.choice([null, null, null, getRandomLocation()])
    }
}

 export function getColorFromBackgroundColor(bg) {
    switch (bg) {
        case '#baf3db': return '#164b35' // trello green
        case '#f8e6a0': return '#4f3a0e' // trello yellow
        case '#fedec8': return '#6e3b0d' // trello orange
        case '#ffd5d2': return '#6e0d0d' // trello red
        case '#dfd8fd': return '#4f3a0e' // trello purple
        case '#cce0ff': return '#0d2e6e' // trello blue
        case '#c6edfb': return '#0d3a4f' // trello light blue
        case '#d3f1a7': return '#3a4f0d' // trello light green
        case '#fdd0ec': return '#6e0d3a' // trello pink
        case '#f1f2f4': return '#3a3a3a' // trello grey
        // case "#60D394": return "#164b35"
        // case "#FFD97D": return "#4f3a0e"
        // case "#fea362": return "#6e3b0d"
        // case "#FF6B6B": return "#6e0d0d"
        // case "#9f8fef": return "#4f3a0e"
        // case "#579dff": return "#0d2e6e"
        // case "#6cc3e0": return "#0d3a4f"
        // case "#94c748": return "#3a4f0d" // ugly green dont want this shit
        // case "#e774bb": return "#6e0d3a" // ugly pink
        // case "#8590a2": return "#3a3a3a" // ugly dark blue
        default:        return "#3a3a3a"
    }
}

function getRandomGroups() {
    const groupCount = random.randint(2,5)
    return Array.from({length: groupCount}, () => {
        const tasksCount = random.randint(3,8)
        const backgroundColor = getRandomColor()
        const style = { backgroundColor, color: getColorFromBackgroundColor(backgroundColor) }

        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            archivedAt: random.choice([null, random.date('2022-01-01','2023-12-31').getTime()]),
            tasks: Array.from({length: tasksCount}, getRandomTask),
            style,
            watched: random.choice([true,false]),
            isMinimaized:random.choice([true,false])
        }
    })
}

function getRandomGroups1() {
    const groupCount = random.randint(2,5)
    return Array.from({length: groupCount}, () => {
        const tasksCount = random.randint(3,8)
        const backgroundColor = random.choice([ getRandomColor(), null])
        const style = { backgroundColor }
        if (backgroundColor) style.color = getColorFromBackgroundColor(backgroundColor)

        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            archivedAt: random.choice([null, random.date('2022-01-01','2023-12-31').getTime()]),
            tasks: Array.from({length: tasksCount}, getRandomTask),
            style
        }
    })
}

function getRandomColor() {
    const trelloColors = [
        '#baf3db',
        '#f8e6a0',
        '#fedec8',
        '#ffd5d2',
        '#dfd8fd',
        '#cce0ff',
        '#c6edfb',
        // '#d3f1a7',
        '#fdd0ec',
        '#f1f2f4',
    ]
    return random.choice(trelloColors)
}
function getRandomColorLabels() {
    const colors = [
        '#9f8fef', '#f87168', '#fea362', '#f5cd47', '#4bce97', '#579dff']
        // '#c9372c' // ugly red
        // "#60D394","#FFD97D","#FF9B85","#FF6B6B","#7C77B9","#56CCF2"]
    return random.choice(colors)
}

function dropDuplicatedLabels(arr) {
    return arr.filter((v,i,a)=>a.findIndex(t=>(t.color === v.color))===i)
}
function getRandomLabels() {
    const count = random.randint(0,5)
    return dropDuplicatedLabels(Array.from({length: count}, () => ({
        id: random.id(),
        title: random.lorem(random.randint(1,5)),
        color: getRandomColorLabels()
    })))
}

function getRandomBoardActivities() {
    const count = random.randint(2,5)
    return Array.from({length: count}, () => {
        const byMember = random.choice(gUsersPool)
        return {
            id: random.id(),
            title: random.lorem(random.randint(2,6)),
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            },
            group: { id: random.id(), title: random.lorem(random.randint(1,3)) },
            task:  { id: random.id(), title: random.lorem(random.randint(2,4)) }
        }
    })
}

export function getRandomBoard() {
    // const boardId = random.id() // random.id(random.randint(4,10))
    const boardId = random.id() // random.id(random.randint(4,10))
    const createdBy = random.choice(gUsersPool)

    const board = {
        id: boardId,
        // _id: boardId,
        generator: 'getRandomBoard',
        title: random.lorem(random.randint(2,5)),
        isStarred: random.choice([true,false]),
        archivedAt: random.choice([
            null,
            random.date('2022-01-01','2023-12-31').getTime()
        ]),
        createdBy: {
            _id: createdBy._id,
            fullname: createdBy.fullname,
            imgUrl: createdBy.imgUrl
        },
        style: {
            backgroundImage: `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
        },
        labels: getRandomLabels(),
        members: gUsersPool,
        groups: getRandomGroups(),
        activities: getRandomBoardActivities(),
        cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length))
    }

    board.groups.forEach(group => {
        group.tasks.forEach(task => {
            const labelSubset = random.sample(board.labels.map(lbl=>lbl.id), random.randint(0, board.labels.length))
            task.labelIds = labelSubset
        })
    })

    return board
}
