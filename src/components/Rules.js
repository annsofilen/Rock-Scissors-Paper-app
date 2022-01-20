import '../styling/game.css'

function Rules() {


    return (
        <div className="rules-box">
            <h2>Rules of Rock, Scissors, Paper</h2>
            <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
                The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:
            </p>
            <ul>
                <li>Rock wins against scissors.</li>
                <li>Scissors win against paper.</li>
                <li>Paper wins against rock.</li>
            </ul>



        </div>
    )
}
export default Rules;