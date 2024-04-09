// EmergencyContacts.ts

// Define the type for an emergency contact
export interface EmergencyContact {
    designation: string;
    name: string;
    contact: string;
  }
  
  // List of emergency contacts
  const emergencyContacts: EmergencyContact[] = [
    { designation: "Hostel Supervisor", name: "Mr BS Ajith Kumar", contact: "7667651413" },
    { designation: "Hostel Supervisor", name: "Mr VM Mhurthy ", contact: "9884016050" },
    { designation: "Hostel Supervisor", name: "Mr N Venkatesan", contact: "98429007925" },
    { designation: "Hostel Supervisor", name: "Mr K Thennavan ", contact: "9655417121" },
    { designation: "Hostel Supervisor", name: "Mr S Renals lobo ", contact: "87854847527" },
    { designation: "Shift Supervisor", name: "Mr B Chandrasekar ", contact: "8500827965" },
    { designation: "Shift Supervisor", name: "Mr Kumar ", contact: "8825804664" },
    { designation: "Assistant Superintendent", name: "Mr G.Saravanan Selvan ", contact: "7358772954" },
    { designation: "Hostel Superintendent", name: "Dr G.Thamizharai Selvan ", contact: "7358786865" },
    { designation: "Faculty Warden", name: "Dr Ankit Kumar", contact: "9660642738" },
    { designation: "Faculty Warden", name: "Dr Sanjeev", contact: "9828948938" },
    { designation: "Faculty Warden Maintenance", name: "Dr Jayendra Kasture", contact: "9403002433" },
    { designation: "Faculty Warden Food", name: "Dr BalMurugan", contact: "9710344595" },
    { designation: "Assistant Engineer Electrical", name: "Mr.G.Saravanan", contact: "9444738702" },
    { designation: "AC Engineer", name: "Mr Vinod", contact: "8754393839" },
    { designation: "House Keeping Supervisor", name: "Mr Parthiban", contact: "9710881883" },
    { designation: "Hostel ASO", name: "Mr PenniKumar", contact: "9962464993" },
    { designation: "Hostel ASO", name: "Mr M Pattamuthu", contact: "8807425429" },
    { designation: "Fire fighting officer", name: "Mr Chandrasekaran", contact: "9894935066" },
    { designation: "ELECTRICAL ENGG", name: "Mr Chokkalingam", contact: "7358782565" },

    
    // Add more emergency contacts here if needed
  ];
  
  export default emergencyContacts;
  