'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' : 'data-target="#xs-controllers-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' :
                                            'id="xs-controllers-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' : 'data-target="#xs-injectables-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' :
                                        'id="xs-injectables-links-module-AppModule-9bd14a190cfe850744f0db51092b197f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' : 'data-target="#xs-controllers-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' :
                                            'id="xs-controllers-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' : 'data-target="#xs-injectables-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' :
                                        'id="xs-injectables-links-module-AuthModule-1957909d3ad9de46c43118dcb8fcdbf6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartModule-de815ef9f804e30a80630707157ba790"' : 'data-target="#xs-controllers-links-module-CartModule-de815ef9f804e30a80630707157ba790"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-de815ef9f804e30a80630707157ba790"' :
                                            'id="xs-controllers-links-module-CartModule-de815ef9f804e30a80630707157ba790"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-de815ef9f804e30a80630707157ba790"' : 'data-target="#xs-injectables-links-module-CartModule-de815ef9f804e30a80630707157ba790"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-de815ef9f804e30a80630707157ba790"' :
                                        'id="xs-injectables-links-module-CartModule-de815ef9f804e30a80630707157ba790"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' : 'data-target="#xs-controllers-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' :
                                            'id="xs-controllers-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' : 'data-target="#xs-injectables-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' :
                                        'id="xs-injectables-links-module-LoginModule-502e4c1e33d4d4bd781f40d37c2048f8"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogsModule.html" data-type="entity-link" >LogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' : 'data-target="#xs-controllers-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' :
                                            'id="xs-controllers-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' }>
                                            <li class="link">
                                                <a href="controllers/LogsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' : 'data-target="#xs-injectables-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' :
                                        'id="xs-injectables-links-module-LogsModule-37d0dc012f72a1d92acaf3379933f6c8"' }>
                                        <li class="link">
                                            <a href="injectables/LogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' : 'data-target="#xs-controllers-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' :
                                            'id="xs-controllers-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' : 'data-target="#xs-injectables-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' :
                                        'id="xs-injectables-links-module-ProductsModule-478244d547becfb737a33ceffa7d7fb6"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' : 'data-target="#xs-controllers-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' :
                                            'id="xs-controllers-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' : 'data-target="#xs-injectables-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' :
                                        'id="xs-injectables-links-module-UsersModule-64e2cba72f7247a755f4ad043fde0ad5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressDto.html" data-type="entity-link" >AddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartDto.html" data-type="entity-link" >CartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Geolocation.html" data-type="entity-link" >Geolocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeolocationDto.html" data-type="entity-link" >GeolocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogsDto.html" data-type="entity-link" >LogsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Name.html" data-type="entity-link" >Name</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameDto.html" data-type="entity-link" >NameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsCartDto.html" data-type="entity-link" >ProductsCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsDto.html" data-type="entity-link" >ProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCartDto.html" data-type="entity-link" >UpdateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeolocationDto.html" data-type="entity-link" >UpdateGeolocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNameDto.html" data-type="entity-link" >UpdateNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePasswordDto.html" data-type="entity-link" >UpdatePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductsCartDto.html" data-type="entity-link" >UpdateProductsCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductsDto.html" data-type="entity-link" >UpdateProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsersDto.html" data-type="entity-link" >UpdateUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDto.html" data-type="entity-link" >UsersDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Logs.html" data-type="entity-link" >Logs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductsCart.html" data-type="entity-link" >ProductsCart</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});