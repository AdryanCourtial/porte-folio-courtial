export function CircleDecoration({size, top, left, bottom, right}){
    return <div className="bg-[#45515D] rounded-full aspect-square absolute drop-shadow-2xl shadow-my-white -z-50 opacity-40"
    style={{ width: size, top: top, left: left, right: right, bottom: bottom }}>
    <script src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-stars@3/tsparticles.preset.stars.bundle.min.js"></script>

    </div>
}
