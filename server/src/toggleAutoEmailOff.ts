import mongoose from 'mongoose';
import Student from './models/student.model';

const MONGODB_URI = 'mongodb+srv://devendrasuryavanshi:BAu135kW1rgB0Lr7@dood01.l2wvmnd.mongodb.net/SPMS?retryWrites=true&w=majority&appName=Dood01';

async function toggleAutoEmailOff() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const result = await Student.updateMany(
      { autoEmailEnabled: true },
      { $set: { autoEmailEnabled: false } }
    );

    console.log(`🔄 Updated ${result.modifiedCount} students`);
  } catch (error) {
    console.error('❌ Error toggling autoEmailEnabled:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

toggleAutoEmailOff();
