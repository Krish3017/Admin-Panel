

export const userRows = [
  {
    id: 1,
    username: "Jon snow",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    status: "Active",
    email: "rahul.sharma@gmail.com",
    age: 24,
  },
  {
    id: 2,
    username: "Jon snow",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    status: "Inactive",
    email: "neha.verma@gmail.com",
    age: 27,
  },
  {
    id: 3,
    username: "Jon snow",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    status: "Active",
    email: "aman.patel@gmail.com",
    age: 22,
  },
  {
    id: 4,
    username: "Jon snow",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    status: "Pending",
    email: "priya.singh@gmail.com",
    age: 29,
  },
  {
    id: 5,
    username: "Jon snow",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    status: "Active",
    email: "rohit.mehta@gmail.com",
    age: 26,
  },
  {
    id: 1,
    username: "Jon Snow",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400",
    status: "Active",
    email: "jon.snow@gmail.com",
    age: 28,
  },
  {
    id: 2,
    username: "Arya Stark",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    status: "Inactive",
    email: "arya.stark@gmail.com",
    age: 22,
  },
  {
    id: 3,
    username: "Tyrion Lannister",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    status: "Active",
    email: "tyrion.l@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Daenerys Targaryen",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    status: "Pending",
    email: "daenerys.t@gmail.com",
    age: 26,
  },
  {
    id: 5,
    username: "Sansa Stark",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    status: "Active",
    email: "sansa.stark@gmail.com",
    age: 24,
  },
  {
    id: 6,
    username: "Jaime Lannister",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
    status: "Inactive",
    email: "jaime.l@gmail.com",
    age: 32,
  },
  {
    id: 7,
    username: "Bran Stark",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    status: "Active",
    email: "bran.stark@gmail.com",
    age: 21,
  },
  {
    id: 8,
    username: "Cersei Lannister",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    status: "Inactive",
    email: "cersei.l@gmail.com",
    age: 34,
  },
  {
    id: 9,
    username: "Samwell Tarly",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400",
    status: "Active",
    email: "sam.tarly@gmail.com",
    age: 29,
  },
  {
    id: 10,
    username: "Robb Stark",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2?w=400",
    status: "Pending",
    email: "robb.stark@gmail.com",
    age: 27,
  },
];
export const usersColumns = [
  { field: 'id', headerName: 'ID', width: 70 }, {
    field: "user", headerName: "User", width: 230, renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="Avtaar" />
          {params.row.username}
        </div>
      )
    }
  }, {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "age",
    headerName: "Age",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  }
]

