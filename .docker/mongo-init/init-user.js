db = db.getSiblingDB('admin'); // admin DB에 사용자 생성

db.createUser({
    user: "admin",
    pwd: "password",
    roles: [
        { role: "readWrite", db: "nexon" } // nexon DB에 대한 권한
    ]
});

db = db.getSiblingDB('nexon'); // nexon DB 생성 유도용 dummy 데이터 삽입
db.test.insertOne({ initialized: true });
