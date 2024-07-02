import DishItem from "./DishItem";
import { useState } from "react";

export default function Menu({ MenuList , showItem , handler}) {
	
	const { title, itemCards, categories } = MenuList.card.card;

	function showItemListHandler() {
        handler()
	}

	return (
		<div>
			{itemCards ? (
				<>
					<div className="accordion-container">
						<div
							onClick={() => {
								showItemListHandler();
							}}
							className="accordion-head"
						>
							<h1>
								{title} ({itemCards.length})
							</h1>
                            
                            {
                                showItem ? <i class="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>
                            }
							
						</div>
						<div className="accordion-body">
							{showItem &&
								itemCards.map((item) => (
									<DishItem key={item.card.info.id} data={item.card.info} />
								))}
						</div>
					</div>
				</>
			) : (
				<>
					<h1 className="category-title">{title}</h1>
					{categories.map((category) => (
						<div className="accordion-container" key={category.title}>
							<div>
								<div
									onClick={() => {
										showItemListHandler();
									}}
									className="accordion-head"
								>
									<h1>
										{category.title} ({category.itemCards.length}){" "}
									</h1>

                                    {
                                        showItem ? <i class="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>
                                    }
								</div>
							</div>

							<div className="accordion-body">
								{showItem &&
									category.itemCards.map((menu) => (
										<DishItem key={menu.card.info.id} data={menu.card.info} />
									))}
							</div>
						</div>
					))}
				</>
			)}
			<div className="block-divider"></div>
		</div>
	);
}
