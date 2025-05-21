export default function UserCard({ name, email, roles, Status }) {
    return (
        <div class="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
            <div class="user-info">
                <h2 class="text-base font-bold text-[16px] font-sans">{name}</h2>
                <p class="my-[2px] text-gray-600 font-sans">{email}</p>
                <div class="mt-1.5"></div>
                <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans mr-1.5">{roles}</span>
            </div>
            <div class="status aktif flex text-lg font-bold font-sans">Aktif</div>
        </div>
    );
}
