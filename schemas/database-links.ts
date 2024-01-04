/*

COCKROACHDB_PASSWORD=u9Hr9t1sNNAVNz4-cXNMNw

DATABASE_URL="postgresql://ou:u9Hr9t1sNNAVNz4-cXNMNw@basic-werecat-7923.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"


//Above all goes to the env file




generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "cockroachdb"
  url      = env("DATABASE_URL")
}

model Widget {
  id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
}

enum UserRole {
  ADMIN
  CUSTOMER
}

model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?  @db.String(240)
  access_token       String?  @db.String(240)
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?  @db.String(240)
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}


model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  password      String?  
  emailVerified DateTime?
  image         String?
  role      UserRole @default(CUSTOMER)
  accounts      Account[]
  
}

model VerificationToken {
  id String @id @default(cuid())
  email String
  token      String   @unique
  expires    DateTime

  @@unique([email, token])
}



*/
