import "./index";
import "../usa-card-group/index";

import { html, nothing} from "lit";

export default {
  title: "Components/Card",
  component: "usa-card",
  args: {
    title: "",
    media: "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.",
    buttonText: "Visit Florida Keys",
    headerFirst: false,
    layout: "default"
  },
  argTypes: {
    buttonText: {
      description: "Card button text."
    },
    content: {
      description: "Card body content."
    },
    headerFirst: {
      description: "Place the header above above card media."
    },
    media: {
      description: "Img src for component preview."
    },
    layout: {
      control: { type: 'radio' },
      options: ['default', 'flag', 'flag-alt'],
      description: "Media card layout at wide widths."
    },
    title: {
      description: "Card header text."
    }
  },
  render: ({ title, content, buttonText }) => {
    return html`
      <usa-card>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card"}</h2>
        </div> 
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const Default = {
  argTypes: {
    media: {
      table: {
        disable: true
      }
    },
    headerFirst: {
      table: {
        disable: true
      }
    },
    layout: {
      table: {
        disable: true
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A default card with a title, text content, and a button.'
      }
    }
  }
};

export const CardWithMedia = {
  argTypes: {
    headerFirst: {
      table: {
        disable: true
      }
    },
    layout: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A card variant featuring media.'
      }
    }
  },
  render: ({ title, media, content, buttonText, headerFirst }) => {
    return html`
      <usa-card ?header-first=${headerFirst}>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card w/ Media"}</h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const MediaWithHeaderFirst = {
  args: {
    headerFirst: true
  },
  argTypes: {
    layout: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A card variant featuring media, displaying the header first.'
      }
    }
  },
  render: ({ title, media, content, buttonText, headerFirst }) => {
    return html`
      <usa-card ?header-first=${headerFirst}>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Media with Header first"}</h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const InsetMedia = {
  argTypes: {
    headerFirst: {
      table: {
        disable: true
      }
    },
    layout: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A card variant featuring media.'
      }
    }
  },
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Inset Media"}</h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const ExdentMedia = {
  argTypes: {
    headerFirst: {
      table: {
        disable: true
      }
    },
    layout: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Extends the media element out over the card border.'
      }
    }
  },
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card>
        <img slot="card-media" src="${media}" alt="Placeholder image" exdent>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Exdent media"}</h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const Flag = {
  args: {
    layout: "flag",
  },

  parameters: {
    docs: {
      description: {
        story: 'Display in a horizontal (“flag”) orientation at a specified width ($theme-card-flag-min-width).'
      }
    }
  },

  render: ({ title, media, content, buttonText, headerFirst, layout }) => {
    return html`
      <usa-card ?header-first=${headerFirst} layout="${layout == 'default' ? nothing : layout}">
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Default flag"}</h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const FlagMediaRightInset = {
  args: {
    layout: "flag-alt"
  },
  render: ({ title, media, content, buttonText, layout, headerFirst }) => {
    return html`
      <usa-card ?header-first=${headerFirst} layout="${layout == 'default' ? nothing : layout}">
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Flag media right inset"}
          </h2>
        </div>
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const CardGroup = {
  render: ({ title, media, content, buttonText }) => {
    return`
      <usa-card-group>
        <usa-card>
          <div slot="card-header">
            <h2 class="usa-card__heading">${title}</h2>
          </div> 
          <div slot="card-body">
            <p>
              ${content}
            </p>
          </div>
          <div slot="card-footer">
            <a href="#" class="usa-button">${buttonText}</a>
          </div>
        </usa-card>

        <usa-card>
          <img slot="card-media" src="${media}" alt="Placeholder image">
          <div slot="card-header">
            <h2 class="usa-card__heading">${"Card w/ Media"}</h2>
          </div>
          <div slot="card-body">
            <p>
              ${content}
            </p>
          </div>
          <div slot="card-footer">
            <a href="#" class="usa-button">${buttonText}</a>
          </div>
        </usa-card>

        <usa-card header-first>
          <img slot="card-media" src="${media}" alt="Placeholder image">
          <div slot="card-header">
            <h2 class="usa-card__heading">${"Media with Header first"}</h2>
          </div>
          <div slot="card-body">
            <p>
              ${content}
            </p>
          </div>
          <div slot="card-footer">
            <a href="#" class="usa-button">${buttonText}</a>
          </div>
        </usa-card>

        <usa-card>
          <img slot="card-media" src="${media}" alt="Placeholder image">
          <div slot="card-header">
            <h2 class="usa-card__heading">${"Inset Media"}</h2>
          </div>
          <div slot="card-body">
            <p>
              ${content}
            </p>
          </div>
          <div slot="card-footer">
            <a href="#" class="usa-button">${buttonText}</a>
          </div>
        </usa-card>

        <usa-card>
          <img slot="card-media" src="${media}" alt="Placeholder image" exdent>
          <div slot="card-header">
            <h2 class="usa-card__heading">${"Exdent media"}</h2>
          </div>
          <div slot="card-body">
            <p>
              ${content}
            </p>
          </div>
          <div slot="card-footer">
            <a href="#" class="usa-button">${buttonText}</a>
          </div>
        </usa-card>
      </usa-card-group>
    `
  }
}
