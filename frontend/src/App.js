import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Bookdetail from "./Components/Home/Books/Bookdetail";
import Landingpage from "./Components/User/UserDash/Landingpage";
import RequireAuth from "./Components/RequireAuth";
import ReviewPage from "./Components/ReviewPage";
import RentPage from "./Components/RentPage";
import UserProfile from "./Components/User/UserProfile";
import AdminView from "./Components/Admin/AdminView";
import AdminLayout from "./Components/Admin/AdminLayout";
import AddBook from "./Components/Admin/AddBook.jsx";
import ViewUsers from "./Components/Admin/ViewUsers";
import BookActions from "./Components/Admin/BookActions";
import PresistLogin from "./Components/PresistLogin";
import Notfound from "./Components/Notfound";
import Forbidden from "./Components/Forbidden";
import UserLayout from "./Components/UserLayout";

function App() {
    return (
        <div>
            <Routes>
                {/* public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/bookdetails/:id" element={<Bookdetail />} />
                <Route path="/unauthorized" element={<Forbidden />} />

                {/* private routes  */}

                <Route element={<PresistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[8765]} />}>
                        <Route element={<UserLayout />}>
                            <Route path="/userdashboard" element={<Landingpage />} />
                            <Route path="/review/:id" element={<ReviewPage />} />
                            <Route path="/rent/:id" element={<RentPage />} />
                            <Route path="/profile/:id" element={<UserProfile />} />
                        </Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[6996]} />}>
                        <Route element={<AdminLayout />}>
                            <Route path="/admindash" element={<AdminView />} />
                            <Route path="/addbook" element={<AddBook />} />
                            <Route path="/view-users" element={<ViewUsers />} />
                            <Route path="/adminbookactions/:id" element={<BookActions />} />
                        </Route>
                    </Route>
                </Route>

                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
    );
}

export default App;
