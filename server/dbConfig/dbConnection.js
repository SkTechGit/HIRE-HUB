import mongoose from "mongoose";

const dbConnection = async () => {
  try {
<<<<<<< HEAD
    if (!process.env.MONGODB_URL) {
      console.warn("⚠️  MONGODB_URL not found in .env - Database connection skipped");
      return;
    }

    const dbConnection = await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      w: "majority",
    });
    console.log("✓ DB Connected Successfully");
  } catch (error) {
    console.warn("⚠️  DB Error: " + error.message);
    console.warn("Server will start without database connection");
=======
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
  }
};

export default dbConnection;
