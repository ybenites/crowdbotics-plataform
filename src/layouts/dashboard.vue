<template>
  <div class="_layout">
    <div>
        <header class="outer-container bg-Secondary fixed-top" data-v-0a972310="">
            <nav class="navbar navbar-expand-xl px-0" data-v-0a972310="">
                <div class="container-xl" data-v-0a972310="">
                <div data-v-0a972310="">
                    <button
                    id="navBar"
                    type="button"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="popupNavigation"
                    aria-label="Toggle navigation"
                    class="navbar-toggler collapsed"
                    data-v-0a972310=""
                    >
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IkFkZC10by1DYXJ0LSZhbXA7LUxvZ2luIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkFkZC1Uby1NeS1DYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuMDAwMDAwLCAtNTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNSw2NiBMMzksNjYgTDM5LDYzLjMzMzMzMzMgTDE1LDYzLjMzMzMzMzMgTDE1LDY2IFogTTE1LDU5LjMzMzMzMzMgTDM5LDU5LjMzMzMzMzMgTDM5LDU2LjY2NjY2NjcgTDE1LDU2LjY2NjY2NjcgTDE1LDU5LjMzMzMzMzMgWiBNMTUsNTAgTDE1LDUyLjY2NjY2NjcgTDM5LDUyLjY2NjY2NjcgTDM5LDUwIEwxNSw1MCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="
                        alt="Navbar Toggler"
                        height="20"
                        width="27"
                        data-v-0a972310=""
                    />
                    </button>
                    <a id="navbar-logo" href="/dashboard" target="_self" classes="logo" class="" data-v-0a972310="">
                        <span>
                            <img
                                alt="Logo"
                                id="navbar-logo_image"
                                width="100"
                                height="20"
                                src="@/assets/logo.png"
                                class="logo"
                                lazy="loaded" />
                        </span>
                    </a>
                </div>
                <div class="pr-2 d-flex" data-v-0a972310="">
                    <a
                    id="consumer_navbar_auth_link"
                    href="#"
                    target="_self"
                    class="btn btn-secondary btn-sm rounded px-2 px-lg-2 ml-2"
                    data-v-0a972310=""
                    >
                    Logout
                    </a>
                    
                </div>
                </div>
            </nav>
        </header>
        <div class="navbar-offset"></div>
    </div>
    <main>
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
nav.navbar {
    background: #3f6ab3;
}
.navbar-offset, nav.navbar{
    height: 66px;
}
img.logo{
    max-width: 50px;
}
</style>