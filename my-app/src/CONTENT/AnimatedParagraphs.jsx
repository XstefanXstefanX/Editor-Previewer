import React from "react";
import "./AnimatedP.css";

class AnimatedP extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="Item hidden">
          <img
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/ba5ef311-1029-4d00-a69c-d6072d7a4cc8.jpg?20230728090208"
            alt=""
          />
          <div class="description">
            <h1>ERA-DEFINING SOUND</h1>
            <p>
              The amp that started it all is back. The same iconic JTM sound in
              a smaller package. The JTM is a welcome addition to the Studio
              range, offering players authentic, smooth, valve-driven break-up
              at lower volumes - perfect for use at home or in the studio.
            </p>
            <p>
              The Studio JTM is available as a 20W <a href='/'>head</a> or <a href='/'>combo</a>.
            </p>
            <h4>
              Untold millions have heard its tone on stage or in the studio, but
              now it’s your turn to be a part of history.
            </h4>
            <button>explore the full range here</button>
          </div>
        </div>
        <div className="Item hidden">
          <img
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/65c566a3-9a1c-4bcc-8ac6-ae83995c23b8.jpg?20230223150310"
            alt=""
          />
          <div class="description">
            <h1>MARSHALL GROUP IS BORN</h1>
            <p>
              Bringing together rock’n’roll legend Marshall Amplification and
              audio phenomenon Zound Industries to pioneer the future of sound
              and technology. Deal marks next chapter for the decade long and
              highly successful partnership.
            </p>
            <button>read more</button>
          </div>
        </div>
        <div className="Item hidden">
          <img
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/fb2adbf5-be40-4a16-ae83-4ede22cfe65d.jpg?20230104142034"
            alt=""
          />
          <div class="description">
            <h1>THE LEGENDS ARE BACK</h1>
            <p>
              We're proud to introduce accurate re-issues of the Guv'nor,
              Shredmaster, Drivemaster and Bluesbreaker pedals. Meticulously
              recreated and instantly recognisable, these pedals capture the
              originals’ iconic sounds. Assembled by hand in the UK, every
              detail has been precisely and faithfully reproduced.
            </p>
            <h4>
              All that’s missing are the stories collected over 30+ years of
              use. That’s where you come in.
            </h4>
            <button>learn more</button>
          </div>
        </div>
        <div className="Item hidden">
          <img
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/ee020565-6083-4b8d-8f78-c3c81e82b098.png?20230330111109"
            alt=""
          />
          <div class="description">
            <h1>100 FOR 100</h1>
            <p>
              Our history is built on alternative music created by artists.
              Without these genre defining guitarists pushing the boundaries of
              what can be done, welding a wall of Marshall amps behind them, we
              wouldn’t be where we are today.
            </p>
            <p>
              As we celebrate Jim Marshall's 100th birthday we’re showcasing 100
              artists who have made the music scene what it is today, breaking
              through defiantly into the industry that Jim helped shape.
            </p>
            <h4>Stay tuned for more from our 100 for 100 campaign.</h4>
            <button>read more</button>
          </div>
        </div>
        <div className="Item hidden">
          <img
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/9f2def95-504a-41b4-9085-b142c0ecfc77.jpg?20230630101112"
            alt=""
          />
          <div class="description">
            <h1>MARSHALL HISTORY</h1>
            <p>
              Marshall has been celebrated by some of the world’s greatest bands
              and musicians including Jimi Hendrix, Eric Clapton, Slash and
              Oasis. None of this, however, would be possible without founder
              and revolutionary, Jim Marshall OBE and his son Terry.
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
    );
  }
}



export default AnimatedP;
