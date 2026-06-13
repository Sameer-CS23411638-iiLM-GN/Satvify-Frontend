import "./Profile.css";

function Profile() {
    return (
        <div className="profile-page">
            <h1>My Profile</h1>

            <div className="profile-card">
                <label>Name</label>
                <input type="text" value="Sameer" readOnly />

                <label>Email</label>
                <input type="email" value="sameer@example.com" readOnly />

                <label>Phone</label>
                <input type="text" value="+91 9876543210" readOnly />

                <button>Edit Profile</button>
            </div>
        </div>
    );
}

export default Profile;